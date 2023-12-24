import styles from './Clock.module.css'
import MainContainer from '../MainContainer' 
import { ReactNode } from 'react'

interface ClockProps {
    clockMode:  ReactNode
    clockOptions:  ReactNode
}
function Clock({clockMode, clockOptions}:ClockProps) {
    return(
        <MainContainer>
            <div className={styles.clock}>
                {clockMode}
            </div>
            <div className={styles.clockOptions}>
                {clockOptions}
            </div>
        </MainContainer>
    )
}

export default Clock