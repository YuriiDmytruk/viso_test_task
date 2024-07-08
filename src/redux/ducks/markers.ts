import { MarkerType, MarkerStateType, addMarkerType, deleteMarkerType, deleteAllMarkersType, updateMarkerType } from '../../../types';

export const ADD_MARKER = 'ADD_MARKER'
export const DELETE_MARKER = 'DELETE_MARKER'
export const DELETE_ALL_MARKERS = 'DELETE_ALL_MARKERS'
export const UPDATE_MARKER = 'UPDATE_MARKER'

const defaultState: MarkerStateType = {
    markers: []
};

export const markersReducer = (
    state: MarkerStateType = defaultState,
    action: any
): MarkerStateType => {
    switch (action.type) {
        case ADD_MARKER:
            return {markers: [...state.markers, {...action.marker, id: state.markers.length}]}
        case DELETE_MARKER:
            return {markers: state.markers.filter((marker) => marker.id !== action.id)}
        case DELETE_ALL_MARKERS:
            return { markers: [] }
        case UPDATE_MARKER:
            return {markers: [...state.markers.filter((marker) => marker.id !== action.id), action.marker]}
        default:
            return state;
    }
};

export const addMarker = (marker: MarkerType): addMarkerType => {
    return { type: ADD_MARKER, marker: marker }
}
export const deleteMarker = (id: number): deleteMarkerType => {
    return { type: DELETE_MARKER, id: id }
}
export const deleteAllMarkers = (): deleteAllMarkersType => {
    return { type: DELETE_ALL_MARKERS }
}
export const updateMarker = (id: number, marker: MarkerType): updateMarkerType => {
    return { type: UPDATE_MARKER, id: id, marker: marker }
}
