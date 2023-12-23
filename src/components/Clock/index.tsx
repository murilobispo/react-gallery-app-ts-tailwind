import styles from './Clock.module.css'
import MainContainer from '../MainContainer'
import TimeModeClock from '../TimeModeClock'
import TimeModeOptions from '../TimeModeOptions'

function Clock() {
    return(
        <MainContainer>
            <div className={styles.clock}>
                <TimeModeClock/>
            </div>
            <div className={styles.clockOptions}>
                <TimeModeOptions/>
            </div>
        </MainContainer>
    )
}

export default Clock