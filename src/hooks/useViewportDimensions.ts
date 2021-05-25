import { useState, useEffect } from 'react'

interface WindowSizeInterface {
    width?: number,
    height?: number
}

export const useViewportDimensions = (): WindowSizeInterface => {
    const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowSize
}