export type MarkerType = {
    id: number,
    name: string,
    position: Position,
}

export type Position = {
    lat: number,
    lng: number,
}

export type MarkerStateType = {
    markers: MarkerType[],
}

export type addMarkerType = {
    type: string,
    marker: MarkerType,
}

export type deleteMarkerType = {
    type: string,
    id: number,
}

export type deleteAllMarkersType = {
    type: string,
}

export type updateMarkerType = {
    type: string,
    id: number,
    marker: MarkerType,
}
