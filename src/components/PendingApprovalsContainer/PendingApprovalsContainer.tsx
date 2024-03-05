import React from 'react'
import styles from './PendingApprovalsContainer.module.css'
import TransferHistoryTableHandler from '../TransferHistorytable/TransferHistoryTableHandler'
import TabSwitch from '../PendingApprovals/TabSwitch'
import TabSwitchTables from '../PendingApprovals/TabSwitchTables'


const PendingApprovalsContainer = () => {
  return (
     <div className={styles.inner_container}>
      <TabSwitchTables></TabSwitchTables>
     <TabSwitch></TabSwitch>
    </div>
  )
}

export default PendingApprovalsContainer
