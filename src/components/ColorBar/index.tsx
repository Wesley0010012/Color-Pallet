import React from 'react'
import './style.css'
import ColorCard from '../ColorCard'
import { Color } from '../../interfaces/Color'

interface ColorBarParams {
    color: Color
}

const ColorBar = ({color}: ColorBarParams) => {
    return(
        <div className="color-bar" style={{backgroundColor: color.colorCode}}>
            <ColorCard text={color.colorCode} />
        </div>
    )
}

export default ColorBar