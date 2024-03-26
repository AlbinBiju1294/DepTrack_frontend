import React from 'react'
import TransferCounts from '../TransferCounts/TransferCounts'
import styles from './TransferCountsDisplay.module.css'
import TransferCountsHandler from '../TransferCounts/TransferCountsHandler'

const TransferCountsDisplay = () => {
    const transferStatuses = ["Initiated", "Completed", "Cancelled", "Rejected"]
  return (
    <>
      <div className={styles.transferContainer}>
          {transferStatuses.map( transferStatus => (
             <div className={styles.transferContainerChild}>
             <TransferCountsHandler transferStatus={transferStatus}/>
             </div>
          ))}
        </div>
    </>
  )
}

export default TransferCountsDisplay
