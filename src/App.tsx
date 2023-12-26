import './reset.css'
import './App.css'
import Clock from './components/Clock'
import SideBar from './components/SideBar'
import TimeModeClock from './components/TimeModeClock'
import TimeModeOptions from './components/TimeModeOptions'
import { ReactNode, useState } from 'react'
import { BsClock, BsHourglass, BsStopwatch} from "react-icons/bs";

export interface ContentState {
  mode: string
  icon: ReactNode
  content: {
    main: ReactNode
    options: ReactNode
  }
}

function App() {

  const [content, setContent] = useState<ContentState[]>([
    {
      mode: 'Time Now',
      icon: <BsClock/>,
      content: {
        main: <TimeModeClock/>,
        options: <TimeModeOptions/>
      },
    },
    {
      mode: 'Stopwatch',
      icon: <BsStopwatch/>,
      content: {
        main: <h1>IN PROGRESS</h1>,
        options: <h1>IN PROGRESS</h1>
      },
    },
    {
      mode: 'Timer',
      icon: <BsHourglass/>,
      content: {
        main: <h1>IN PROGRESS</h1>,
        options: <h1>IN PROGRESS</h1>
      },
    },
  ])
  
  return (
    <div>
      
      <Clock 
      clockMode={<TimeModeClock/>} 
      clockOptions={<TimeModeOptions/>}
      />
      <SideBar 
      NavItems={content}
      />
    </div>
  )
}

export default App
