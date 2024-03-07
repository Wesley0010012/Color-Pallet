import React from 'react'

import './style.css'

interface GenerateColorsButtonProtocol {
    handler: Function
}

const GenerateColorsButton = ({handler}: GenerateColorsButtonProtocol) => {
    return (
        <button className='generate-button' onClick={() => handler()}>Generate New Colors</button>
    );
}

export default GenerateColorsButton