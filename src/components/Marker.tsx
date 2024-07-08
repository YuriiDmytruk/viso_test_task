import React from 'react'

import { MarkerType } from '../../types';

type MarkerProps = {
    marker: MarkerType
}

const Marker = (props: MarkerProps) => {
    return (
        <div className='w-full h-[15%] bg-slate-100 rounded-lg mt-2 grid-rows-[20%_80%] grid grid-cols-2 pt-2'>
            <div>{props.marker.name}</div>
            <div>SMT</div>
            <div className='col-span-2 pt-2'>
                <div>LAT: {props.marker.position.lat}</div>
                <div>LNG: {props.marker.position.lng}</div>
            </div>
        </div>
    )
}

export default Marker