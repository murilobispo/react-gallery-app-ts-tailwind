import './styles/reset.css'
import './styles/App.css'
import Main from './components/Main'
import SideBar from './components/SideBar'
import TimeMode from './components/TimeMode'
import StopwatchMode from './components/StopwatchMode'
import TimerMode from './components/TimerMode'
import { ReactNode } from 'react'
import { BsClock, BsHourglass, BsStopwatch} from "react-icons/bs";
import { useState } from 'react'

export interface ContentState {
  mode: string
  icon: ReactNode
  content: ReactNode
}

function App() {
  const [selectedItem, setSelectedItem] = useState<ContentState['mode']>('Time Now')

  const contents : ContentState[] = [
    {
      mode: 'Time Now',
      icon: <BsClock/>,
      content: <TimeMode/>
    },
    {
      mode: 'Stopwatch',
      icon: <BsStopwatch/>,
      content: <StopwatchMode/>
    },
    {
      mode: 'Timer',
      icon: <BsHourglass/>,
      content: <TimerMode/>
    }
  ]
  
  return (
    <>
      <Main>{contents.find((item) => item.mode === selectedItem)?.content}</Main>
      <SideBar NavItems={contents} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
    </>
  )
}

export default App
