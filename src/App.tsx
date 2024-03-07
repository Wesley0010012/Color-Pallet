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

  return (
    <div className="App">
      {
        colors.map((color) => (
          <ColorBar color={color} />
        ))
      }
    </div>
  );
}

export default App;
