import { MarkerType, MarkerStateType, addMarkersType, addMarkerType, deleteMarkerType, deleteAllMarkersType, updateMarkerType } from '../../../types';
import { updateMarkerDB, deleteMarkerDB, deleteAllMarkersDB } from '../../fireBase/actions';

export const ADD_MARKER = 'ADD_MARKER'
export const DELETE_MARKER = 'DELETE_MARKER'
export const DELETE_ALL_MARKERS = 'DELETE_ALL_MARKERS'
export const UPDATE_MARKER = 'UPDATE_MARKER'
export const ADD_MARKERS = 'ADD_MARKERS'

const defaultState: MarkerStateType = {
    markers: []
};

export const markersReducer = (
    state: MarkerStateType = defaultState,
    action: any
): MarkerStateType => {
    switch (action.type) {
        case ADD_MARKER:
            const newMarker = { ...action.marker, id: state.markers.length }
            updateMarkerDB(newMarker)
            return { markers: [...state.markers, newMarker] }
        case DELETE_MARKER:
            deleteMarkerDB(action.id)
            return { markers: state.markers.filter((marker) => marker.id !== action.id) }
        case DELETE_ALL_MARKERS:
            deleteAllMarkersDB()
            return { markers: [] }
        case UPDATE_MARKER:
            updateMarkerDB(action.marker)
            return { markers: [...state.markers.filter((marker) => marker.id !== action.id), action.marker] }
        case ADD_MARKERS:
            return { markers: [...state.markers, ...action.markers] }
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

export const addMarkers = (markers: MarkerType[]): addMarkersType => {
    return { type: ADD_MARKERS, markers: markers }
}
