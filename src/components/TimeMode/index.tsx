import { useState, useEffect } from 'react'
import Clock from '../Clock'
import ClockOptions from '../ClockOptions'

function TimeMode () {
  
  const options: any = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString(undefined, options))

  
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
      setCurrentDate(new Date().toLocaleDateString(undefined, options))
      document.title = new Date().toLocaleTimeString()
      
    }, 1000)
    
    return () => clearInterval(timerId)
  }, [])
  
  return(
    <>
      <Clock>
        <h1>{currentTime}</h1>
      </Clock>
      <ClockOptions>
        <h2>{currentDate}</h2>
      </ClockOptions>
    </>
  )
}

export default TimeMode