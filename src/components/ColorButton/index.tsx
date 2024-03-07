import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/fontawesome-free-solid'

import "./style.css"


interface ColorButtonProtocol {
    locked: boolean,
    handler: Function
}

fontawesome.library.add(faLock, faLockOpen);

const ColorButton = ({locked, handler}: ColorButtonProtocol) => {
    if (locked) {
        return <button className="color-button" onClick={() => handler()}><FontAwesomeIcon size='lg' icon="lock" /></button>
    }
    return <button className="color-button" onClick={() => handler()}><FontAwesomeIcon size='lg' icon="lock-open" /></button>
}

export default ColorButton
