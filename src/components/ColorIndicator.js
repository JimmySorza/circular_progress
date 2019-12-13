import { useEffect, useState } from 'react'

export function ColorIndicator(processPercentage) {
    const [colorIndicator, setColorIndicator] = useState('red')
    useEffect(() => {
        processPercentage > 50 ? setColorIndicator('green') : setColorIndicator('red')
    }, [processPercentage]);

    return colorIndicator
}
