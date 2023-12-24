import './reset.css'
import './App.css'
import Clock from './components/Clock'
import SideBar from './components/SideBar'
import TimeModeClock from './components/TimeModeClock'
import TimeModeOptions from './components/TimeModeOptions'

function App() {
  return (
    <div>
      <Clock clockMode={<TimeModeClock/>} clockOptions={<TimeModeOptions/>}/>
      <SideBar/>
    </div>
  )
}

export default App
