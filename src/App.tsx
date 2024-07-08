import React, { useCallback, useEffect, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';


import Map from './components/Map'
import { MODES } from './components/Map'
import MarkersControlPanel from './components/MarkersControlPanel';
import { useDispatch } from 'react-redux';
import { getMarkers } from './fireBase/actions';
import { addMarkers } from './redux/ducks/markers';

//const API_KEY = process.env.REACT_APP_API_KEY || ''

const App = () => {

  const fetchMarkersAndDispatch = async (dispatch: any) => {
    try {
      const markers = await getMarkers();
      dispatch(addMarkers(markers));
    } catch (error) {
      console.error("Failed to fetch markers:", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMarkersAndDispatch(dispatch);
  }, [dispatch]);

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
      <MarkersControlPanel toggleMode={toggleMode} mode={mode} />
      {isLoaded ? <Map mode={mode} /> : <>LOADING</>}
    </div>
  );
}
export default App;
