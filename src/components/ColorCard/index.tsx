import React from 'react'
import './style.css'
import ColorButton from '../ColorButton';

interface ColorCardProtocol {
    text: string,
    locked: boolean,
    handler: Function
}

const ColorCard = ({text, locked, handler}: ColorCardProtocol) => {
    return (
        <div className='color-card'>
            <ColorButton locked={locked} handler={handler} />
            <p className='color-text'>{text}</p>
        </div>
    );
}

export default ColorCard
