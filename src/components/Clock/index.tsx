import styles from './Clock.module.css'
import { ReactNode } from 'react'

interface ClockProps {
    children?:  ReactNode
}

function Clock({children}:ClockProps) {
    return(
        <div className={styles.clock}>
            {children}
        </div>
    )
}

export default Clock