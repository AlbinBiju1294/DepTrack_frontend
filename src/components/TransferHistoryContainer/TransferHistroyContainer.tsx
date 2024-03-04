import React from 'react'
import styles from './TransferHistroyContainer.module.css'
import TransferHistoryTableHandler from '../TransferHistorytable/TransferHistoryTableHandler'


const TransferHistroyContainer = () => {
  return (
     <div className={styles.inner_container}>
     <TransferHistoryTableHandler></TransferHistoryTableHandler>
    </div>
  )
}

export default TransferHistroyContainer
