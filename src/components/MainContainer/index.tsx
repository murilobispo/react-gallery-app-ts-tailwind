import { ReactNode } from 'react'
import styles from './MainContainer.module.css'

interface MainContainerProps{
    children?: ReactNode
}
function MainContainer ({children}:MainContainerProps) {
    return (
        <main className={styles.mainContainer}>
            {children}
        </main>
    )
}
export default MainContainer