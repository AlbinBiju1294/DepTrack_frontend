import React from 'react'
import styles from "./TransferDetailsDisplayContainer.module.css"
import TransferDetailsDisplay from "../TransferDetailsDisplay/TransferDetailsDispaly";
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData'
import RejectTransfer from '../RejectTransfer/RejectTransfer';

const TransferDetailsDisplayContainer = () => {
  return (
    <div className={styles.inner_container}>
        {/* <h4 className={styles.form_heading}>Please fill the form</h4> */}
        {/* <PendingApprovalsTransferDetails/> */}
         <TransferDetailsEmployeeData/>
        <TransferDetailsDisplay/>
        <RejectTransfer/> 
       
    </div>
  )
}

export default TransferDetailsDisplayContainer