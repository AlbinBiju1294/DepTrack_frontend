import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import InnerBody from '../../components/InnerBody/InnerBody'
import styles from './InitiateTransfer.module.css'

const InitiateTransfer = () => {

  const storedUser = localStorage.getItem('user')
  return (
    <>
        <Navbar></Navbar>
        <SideBar></SideBar>
    {/* <div className={styles.main}>
        <InnerBody></InnerBody>
    </div> */}
    
    </>
  )
}

export default InitiateTransfer