import React, { useCallback, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

import Map from './components/Map'
import { MODES } from './components/Map'
import MarkersControlPanel from './components/MarkersControlPanel';

//const API_KEY = process.env.REACT_APP_API_KEY || ''

const App = () => {

  const [mode, setMode] = useState(MODES.MOVE)

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDo2zSU4FTTxh9LahbYjedkIDBGd5t122c'
  })

  return (
    <div>
      <MarkersControlPanel toggleMode={toggleMode} mode={mode}/>
      {isLoaded ? <Map mode={mode} /> : <>LOADING</>}
    </div>
  );
}
//
export default App;
