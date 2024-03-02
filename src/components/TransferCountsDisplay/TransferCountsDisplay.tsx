import React from 'react'
import TransferCounts from '../TransferCounts/TransferCounts'
import { Paper } from '@mui/material'
import styles from './TransferCountsDisplay.module.css'

const TransferCountsDisplay = () => {
    const transferStatuses = ["Initiated", "Completed", "Cancelled", "Rejected"]
  return (
    <>
      <div className={styles.transferContainer}>
          {transferStatuses.map( transferStatus => (
             <div className={styles.transferContainerChild}>
             <TransferCounts status={transferStatus}/>
             </div>
          ))}
        </div>
    </>
  )
}

export default TransferCountsDisplay
