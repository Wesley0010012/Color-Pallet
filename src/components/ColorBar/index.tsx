import React from 'react'
import './style.css'
import ColorCard from '../ColorCard'
import { Color } from '../../interfaces/Color'

interface ColorBarParams {
    color: Color,
    handler: Function
}

const ColorBar = ({color, handler}: ColorBarParams) => {
    return(
        <div className="color-bar" style={{backgroundColor: color.colorCode}}>
            <ColorCard text={color.colorCode} locked={color.locked} handler={handler} />
        </div>
    )
}

export default ColorBar