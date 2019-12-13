import { useEffect, useState } from 'react'

export function ColorIndicator(processPercentage, color) {
    const [colorIndicator, setColorIndicator] = useState(color)
    useEffect(() => {
        processPercentage > 50 ? setColorIndicator('green') : setColorIndicator('red')
    }, [processPercentage]);

    return colorIndicator
}
