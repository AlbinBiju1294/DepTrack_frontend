import React, {useState} from 'react'
import styles from './PendingApprovalsContainer.module.css'
import TabSwitchTables from '../PendingApprovals/TabSwitchTables';
import TabSwitchTablesHandler from '../PendingApprovals/TabSwitchTablesHandler';


const PendingApprovalsContainer = () => {
  
  return (
     <div className={styles.inner_container}>
      <TabSwitchTablesHandler></TabSwitchTablesHandler>
    </div>
  )
}

export default PendingApprovalsContainer
