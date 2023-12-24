import { useState } from 'react';
import styles from './SideBar.module.css'
import { FaBars, FaWindowClose } from "react-icons/fa";
import { BsClock, BsHourglass, BsStopwatch, BsGithub  } from "react-icons/bs";

function SideBar() {

  interface IsOpenState {
    active: boolean
  }

  const [isOpen, setIsOpen] = useState<IsOpenState>({active: false})

  return(
    <div 
    className={`${styles.SideBarContainer} ${isOpen.active ? styles.SideBarVisible : styles.SideBarHidden}`}
    >
      <section className={styles.UpperSection}>
        <header className={styles.Header}>
          <FaWindowClose 
          onClick={() => setIsOpen({ active: !isOpen.active })} 
          className={`${styles.SideBarButton} ${isOpen.active ? styles.SideBarCloseOpen : styles.SideBarCloseClose}`}/>
          <FaBars 
          onClick={() => setIsOpen({ active: !isOpen.active })} 
          className={`${styles.SideBarButton} ${isOpen.active ? styles.SideBarButtonOpen: undefined}`}/>  

          <h3 className={styles.clockAppTitle}>Clock App</h3>
        </header>
        <ul className={styles.Nav}>
          <li className={styles.NavItem}>
            <BsClock/>
            <p>Time Now</p>
          </li>
          <li className={styles.NavItem}>
            <BsStopwatch/>
            <p>Stopwatch</p>
          </li>
          <li className={styles.NavItem}>
            <BsHourglass/>
            <p>Timer</p>
          </li>
        </ul>
      </section>


      <section className={styles.LowerSection}>
        <a href='https://github.com/murilobispo' target="_blank" className={styles.GithubProfile}>
          <BsGithub/>
          <p>murilobispo</p>
        </a>
      </section>
      

    </div>
  )
}

export default SideBar