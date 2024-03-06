import React from 'react'
import styles from "./PendingApprovalsFormContainer.module.css"
// import PendingApprovalsTransferDetails from '../PendingApprovalsTransferDetails/PendingApprovalsTransferDetails'
import TransferDetailsDisplay from "../../components/TransferDetailsDisplay/TransferDetailsDispaly";
import TransferDetailsEmployeeData from '../../components/TransferDetailsEmployeeData/TransferDetailsEmployeeData'
import RejectTransfer from '../RejectTransfer/RejectTransfer';

const PendingApprovalsFormContainer = () => {
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

export default PendingApprovalsFormContainer