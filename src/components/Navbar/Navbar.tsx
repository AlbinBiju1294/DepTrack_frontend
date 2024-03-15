import React, { useContext } from 'react'
import {PersonCircle} from 'react-bootstrap-icons'
import styles from './Navbar.module.css' 
import UserContext from '../Contexts/UserContextProvider'
import { capitalizeFirstLetter } from '../DashboardWelcome/DashboardWelcome'
import { Dropdown } from 'antd'
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();
  const logOutFunction = () => {
      localStorage.clear();
      setUser(null);
      navigate("/login");
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" onClick={logOutFunction}>
          Logout
        </a>
      ),
    },
  ]
  return (
    <nav className={styles.nav}>
    <h5 className={styles.navbar_title}>DepTrack</h5>
    {user?<div className={styles.navbar_right}>
        <PersonCircle/>
        
        <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
          <h5 className={styles.navbar_name}>{user ? capitalizeFirstLetter(user.username) : null}</h5>
        </Dropdown>
    </div>:<></>}
    </nav>
  )
}

export default Navbar