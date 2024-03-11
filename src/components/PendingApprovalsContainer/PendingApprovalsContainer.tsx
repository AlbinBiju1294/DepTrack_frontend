import React, {useState} from 'react'
import styles from './PendingApprovalsContainer.module.css'
import TabSwitchTables from '../PendingApprovals/TabSwitchTables';


const PendingApprovalsContainer = () => {
  
  return (
     <div className={styles.inner_container}>
      <TabSwitchTables></TabSwitchTables>
    </div>
  )
}

export default PendingApprovalsContainer
