import React from 'react'
import './style.css'

interface ColorCardProtocol {
    text: string
}

const ColorCard = ({text}: ColorCardProtocol) => {
    return (
        <div className='color-card'>
            <button></button>
            <p>text</p>
        </div>
    );
}

export default ColorCard
