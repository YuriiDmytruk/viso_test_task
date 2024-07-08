import React from 'react'

import { MODES } from './Map'

type ControlPanelProps = {
    toggleMode: () => void;
    mode: number;
}

const ControlPanel = (props: ControlPanelProps) => {
    return (
        <div className='absolute z-50 w-full h-[10%] bg-transparent flex justify-center items-center'>
            <button onClick={props.toggleMode} className={`btn  ${props.mode === MODES.MOVE ? 'btn-active' : 'btn-accent'}`}>
                {props.mode === MODES.MOVE ? 'Set Markers' : 'Move'}
            </button>
        </div>
    )
}

export default ControlPanel