import styles from './ClockOptions.module.css'
import { ReactNode } from 'react'

interface ClockOptionsProps {
    children?:  ReactNode
}

function ClockOptions({children}:ClockOptionsProps) {
    return(
        <div className={styles.clockOptions}>
            {children}
        </div>
    )
}

export default ClockOptions