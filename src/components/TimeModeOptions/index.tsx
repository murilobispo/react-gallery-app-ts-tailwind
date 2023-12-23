import styles from './TimeModeOptions.module.css'
import { useState, useEffect } from 'react'

function TimeModeOptions () {
    
    interface Options {
        weekday: string,
        year: string,
        month: string,
        day: string,
    }
    const options:Options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString(undefined, options))

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentDate(new Date().toLocaleDateString(undefined, options))
            console.log(new Date().toLocaleDateString(undefined, options))
        }, 1000)
    
        return () => clearInterval(timerId);
    }, [])
    
    
    return(
        <h2>{currentDate}</h2>
    )
}

export default TimeModeOptions