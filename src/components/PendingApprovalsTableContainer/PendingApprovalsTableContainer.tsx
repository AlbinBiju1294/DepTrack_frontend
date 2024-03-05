import React from 'react'
import styles from './PendingApprovalsTableContainer.module.css'
import PendingApprovalsTableHandler from '../PendingApprovalsTable/PendingApprovalsTableHandler'

const PendingApprovalsTableContainer = () => {
  return (
     <div className={styles.inner_container}>
     <PendingApprovalsTableHandler/>
    </div>
  )
}

export default PendingApprovalsTableContainer