import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContextProvider'
import styles from './DashboardWelcome.module.css'
import { capitalizeFirstLetter } from '../../utils/utils'

const DashboardWelcome = () => {

  const {user} = useContext(UserContext)
    
  return (
    <>
    <h2 className={`${styles.welcome} ${styles.new}`}>Welcome {user ? capitalizeFirstLetter(user.employee_name) : null}</h2>
    </>
  )
}

export default DashboardWelcome