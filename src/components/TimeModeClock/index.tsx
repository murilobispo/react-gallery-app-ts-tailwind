import styles from './TimeModeClock.module.css'
import { useState, useEffect } from 'react'

function TimeMode () {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString())
        document.title = new Date().toLocaleTimeString()

        console.log(new Date().toLocaleTimeString())
      }, 1000)
      
      return () => clearInterval(timerId)
    }, [])
    
    return(
      <h1 className={styles.timeText}>{currentTime}</h1>
    )
}

export default TimeMode