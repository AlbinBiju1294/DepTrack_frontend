import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContextProvider'
import styles from './DashboardWelcome.module.css'

export const capitalizeFirstLetter = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const DashboardWelcome = () => {

    const {user} = useContext(UserContext)
    
  return (
    <>
    <h2 className={`${styles.welcome} ${styles.new}`}>Welcome {user ? capitalizeFirstLetter(user.employee_name) : null}</h2>
    </>
  )
}

export default DashboardWelcome