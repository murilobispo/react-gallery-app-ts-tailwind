import styles from './StopwatchOptions.module.css'

function StopWatchOptions () {
    return(
        <>
            <p className={styles.SWButton}>Start</p>
            <p className={styles.SWButton}>Reset</p>
        </>
    )
}

export default StopWatchOptions