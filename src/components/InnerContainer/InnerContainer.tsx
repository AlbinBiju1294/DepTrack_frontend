import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCounts from '../TransferCounts/TransferCounts'
import TransferCountsDisplay from '../TransferCountsDisplay/TransferCountsDisplay'
import DuDetails from '../DuDetails/DuDetails'

const InnerContainer = () => {
 
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
        <DuBar></DuBar>
        <div className={styles.du_transfer_details}>
        <TransferCountsDisplay></TransferCountsDisplay>
        <DuDetails></DuDetails>
      </div>
    </div>
  )
}

export default InnerContainer