import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { deleteAllMarkers } from '../redux/ducks/markers';

import { MODES } from './Map'
import Marker from './Marker';

import { MarkerStateType } from '../../types';

type MarkersControlPanelProps = {
  toggleMode: () => void;
  mode: number;
}

const MarkersControlPanel = (props: MarkersControlPanelProps) => {
  const dispatch = useDispatch();
  const markers = useSelector((state: MarkerStateType) => state.markers);

  return (
    <div className='absolute z-50 bg-white w-[15%] h-[80%] ml-7 m-auto top-0 bottom-0 rounded-lg flex items-center justify-center'>
      <div className='grid h-[95%] w-[90%] grid-rows-[5%_95%]'>
        <div className='flex w-[100%] font-bold'>
          <div className='text-center w-full select-none cursor-pointer hover:underline'
          onClick={() => {dispatch(deleteAllMarkers())}}
          >
            Clear all
          </div>
          <div className={`
           text-center w-full select-none cursor-pointer hover:underline
           ${props.mode === MODES.MOVE ? 'text-black' : 'text-blue-800'}`}
            onClick={props.toggleMode}>
            Set Marker
          </div>
        </div>

        <div className='overflow-auto no-scrollbar'>
        {markers.map((marker) => <Marker  marker={marker} key={marker.id} />)}

        </div>

      </div>
    </div>
  )
}

export default MarkersControlPanel