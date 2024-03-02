import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import InnerBody from '../../components/InnerBody/InnerBody'
import styles from './Dashboard.module.css'

const Dashboard = () => {

  const storedUser = localStorage.getItem('user')
  console.log(storedUser)
  return (
    <>
        
    <div className={styles.main}>
        <InnerBody></InnerBody>
    </div>
    
    </>
  )
}

export default Dashboard