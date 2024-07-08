export type MarkerType = {
    id: number,
    name: string,
    position: Position,
}

export type Position = {
    lat: number,
    lng: number,
}

export type MarkerTypeDB = {
    id: number,
    name: string,
    location: Position,
    timestamp: number
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

export type addMarkersType = {
    type: string,
    markers: MarkerType[]
}

export type updateMarkerType = {
    type: string,
    id: number,
    marker: MarkerType,
}
