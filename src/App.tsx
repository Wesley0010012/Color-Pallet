import React, { useEffect, useState } from 'react';
import './App.css';
import ColorBar from './components/ColorBar';

import GenerateRandomColor from './utils/GenerateRandomColor';
import { Color } from './interfaces/Color';

function App() {
  const [colors, setColors] = useState<Color[]>([])

  useEffect(() => {

    let tempColors: Array<Color> = []
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())
    tempColors.push(GenerateRandomColor())

    setColors(tempColors)
  }, [])

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

  return (
    <div className="App" onKeyDown={generateNewColors}>
      {
        colors.map((color, index) => (
          <ColorBar color={color} handler={() => lockColor(index)} />
        ))
      }
    </div>
  );
}

export default App;
