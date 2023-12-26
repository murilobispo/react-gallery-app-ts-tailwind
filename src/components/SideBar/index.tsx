import { useState } from 'react';
import styles from './SideBar.module.css'
import { FaBars, FaWindowClose } from "react-icons/fa";
import { BsGithub  } from "react-icons/bs";
import { ContentState } from '../../App';

interface SideBarProps {
  NavItems : ContentState[]
  selectedItem: string
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>
}

function SideBar({ NavItems, selectedItem, setSelectedItem}: SideBarProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return(
    <div 
    className={`${styles.SideBarContainer} ${isOpen ? styles.SideBarVisible : styles.SideBarHidden}`}
    >
      <section className={styles.UpperSection}>
        <header className={styles.Header}>
          <FaWindowClose 
          onClick={() => setIsOpen(!isOpen)} 
          className={`${styles.SideBarButton} ${isOpen ? styles.SideBarCloseOpen : styles.SideBarCloseClose}`}/>
          <FaBars 
          onClick={() => setIsOpen(!isOpen)} 
          className={`${styles.SideBarButton} ${isOpen ? styles.SideBarButtonOpen: undefined}`}/>  

          <h3 className={styles.clockAppTitle}>Clock App</h3>
        </header>
        <ul className={styles.Nav}>
          {NavItems.map((item) =>(
            <li 
            className={`
            ${styles.NavItem} 
            ${(item.mode === selectedItem ) ? styles.NavItemSelected : undefined}
            `
          }
            onClick={() => setSelectedItem(item.mode)}
            >
              {item.icon}
              <p>{item.mode}</p>
            </li>
          ))}
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