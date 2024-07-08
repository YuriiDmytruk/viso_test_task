import { GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addMarker, updateMarker } from '../redux/ducks/markers';
import { MarkerStateType, MarkerType } from '../../types';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const defoultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  fullscreenControl: false
}

const center = {
  lat: -3.745,
  lng: -38.523
};

type mapProps = {
  mode: number
}

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1
}

const Map = (props: mapProps) => {

  const markers = useSelector((state: MarkerStateType) => state.markers);

  const mapRef = React.useRef(undefined)
  const dispatch = useDispatch();

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined
  }, [])

  const onClick = (loc: any) => {
    if (props.mode === MODES.SET_MARKER) {
      const lat = loc.latLng.lat()
      const lng = loc.latLng.lng()
      const enteredName = prompt('Please enter name for marker') || 'Not Named Marker'
      dispatch(addMarker({
        id: -1,
        name: enteredName,
        position: {
          lat: lat,
          lng: lng
        },
      }));
    }
  }

  const handleDrag = (e: any, marker: MarkerType) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    dispatch(updateMarker(marker.id, {
      id: marker.id,
      name: marker.name,
      position: {
        lat: lat,
        lng: lng
      },
    }));
    
  }

  return (
    <div className='h-[100vh]' >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defoultOptions}
        onClick={onClick}
      >
        {markers.map((marker) =>
          <Marker
            position={marker.position}
            label={{ text: marker.name }}
            key={marker.id}
            draggable={true}
            onDragEnd={(e) => { handleDrag(e, marker) }} />
        )}
      </GoogleMap>
    </div>
  )
}

export default Map