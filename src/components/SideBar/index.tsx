import { useState } from 'react';
import styles from './SideBar.module.css'
import { FaBars, FaWindowClose } from "react-icons/fa";
import { BsGithub  } from "react-icons/bs";
import { ContentState } from '../../App';

function SideBar({ NavItems }: { NavItems: ContentState[] }) {

  interface IsOpenState {
    active: boolean
  }

  const [isOpen, setIsOpen] = useState<IsOpenState>({
    active: false
  })
 const [selectedItem, setSelectedItem] = useState<ContentState['mode']>('Time Now')
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
          {NavItems.map((item) =>(
            <li 
            className={`
            ${styles.NavItem} 
            ${(item.mode === selectedItem ) ? styles.NavItemSelected : undefined}
            `
          }
            onClick={() => {
              setSelectedItem(item.mode)
              console.log(selectedItem)
            }
            }
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