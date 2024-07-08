import { useDispatch } from 'react-redux';

import { deleteMarker, updateMarker } from '../redux/ducks/markers';

import { MarkerType } from '../../types';

type MarkerProps = {
    marker: MarkerType
}

const Marker = (props: MarkerProps) => {
    const dispatch = useDispatch();

    const handleEditClick = () => {
        const enteredName = prompt('Please enter new name for marker') || 'Not Named Marker'
        dispatch(updateMarker(props.marker.id, {...props.marker, name: enteredName}))
    }

    return (
        <div className='w-full h-[15%] bg-slate-100 rounded-lg mt-2 grid-rows-[20%_80%] grid grid-cols-2 pt-2 pl-3'>
            <div>{props.marker.name}</div>
            <div className='font-bold'>
                <button className='mr-3' onClick={handleEditClick}>Edit</button>
                <button onClick={() => {dispatch(deleteMarker(props.marker.id))}}>Delete</button>
            </div>
            <div className='col-span-2 pt-2'>
                <div>LAT: {props.marker.position.lat}</div>
                <div>LNG: {props.marker.position.lng}</div>
            </div>
        </div>
    )
}

export default Marker