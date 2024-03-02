import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContextProvider'
import styles from './DashboardWelcome.module.css'

const DashboardWelcome = () => {

    const {user} = useContext(UserContext)
  return (
    <>
    <h2 className={`${styles.welcome} ${styles.new}`}>Welcome</h2>
    <h2 className={styles.welcome}>{user?.username}</h2>
    </>
  )
}

export default DashboardWelcome