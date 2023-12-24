import { useState, useEffect } from 'react'

function TimeModeClock () {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString())
        document.title = new Date().toLocaleTimeString()
      }, 1000)
      
      return () => clearInterval(timerId)
    }, [])
    
    return(
      <h1>{currentTime}</h1>
    )
}

export default TimeModeClock