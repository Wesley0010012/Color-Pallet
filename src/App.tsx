import React, { useEffect, useState } from 'react';
import './App.css';
import ColorBar from './components/ColorBar';

import GenerateRandomColor from './utils/GenerateRandomColor';
import { Color } from './interfaces/Color';
import GenerateColorsButton from './components/GenerateColorsButton';

function App() {
  const [colors, setColors] = useState<Color[]>([])

  const lockColor = (index: number): void => {
    const [...tempColors]: Color[] = colors;
    tempColors[index].locked = !tempColors[index].locked;

    setColors(tempColors);
  }

  const generateNewColors = (): void => {
    const [...tempColors] = colors;

    const result = tempColors.map((color) => {
      if(!color.locked) {
        return GenerateRandomColor()
      } else {
        return color
      }
    })

    setColors(result)
  }

  useEffect(() => {
    let tempColors: Array<Color> = []
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())

    setColors(tempColors)
  },[])

  const generateNewColorsHandler = () => {
    generateNewColors()
  }

  return (
    <div className="App">
      <GenerateColorsButton handler={generateNewColorsHandler} />
      <div className='container' autoFocus>
      {
        colors.map((color, index) => (
          <ColorBar color={color} handler={() => lockColor(index)} key={index}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
