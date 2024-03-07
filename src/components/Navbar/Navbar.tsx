import React, { useContext } from 'react'
import {PersonCircle} from 'react-bootstrap-icons'
import styles from './Navbar.module.css' 
import UserContext from '../Contexts/UserContextProvider'
import { capitalizeFirstLetter } from '../DashboardWelcome/DashboardWelcome'

const Navbar = () => {
  const {user} = useContext(UserContext)
  return (
    <nav className={styles.nav}>
    <h5 className={styles.navbar_title}>DepTrack</h5>
    {user?<div className={styles.navbar_right}>
        <PersonCircle/>
        <h5 className={styles.navbar_name}>{user ? capitalizeFirstLetter(user.username) : null}</h5>
    </div>:<></>}
    </nav>
  )
}

export default Navbar