import { Color } from "../interfaces/Color"

const GenerateRandomColor = (): Color => {
    const hex: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    let resultColor: string = '#'

    for(let i = 1; i <= 6; i++) {
        resultColor += hex[Math.floor(Math.random() * hex.length)]
    }

    return {
        colorCode: resultColor,
        locked: false
    }
}

export default GenerateRandomColor
