import React, { useState } from 'react'
import styles from "./TransferDetailsDisplayContainer.module.css"
import TransferDetailsDisplay from "../TransferDetailsDisplay/TransferDetailsDispaly";
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData'
import TransferButtonComponent from '../TransferButtonComponent/TransferButtonComponent';
import TransferButtonComponentHandler from '../TransferButtonComponent/TransferButtonComponentHandler';
import TransferDetailsDisplayHandler from '../TransferDetailsDisplay/TransferDetailsDisplayHandler';

const TransferDetailsDisplayContainer = () => {

  const[ transferDate, setTransferDate] = useState("");


  return (
    <div className={styles.inner_container}>
        {/* <h4 className={styles.form_heading}>Please fill the form</h4> */}
        {/* <PendingApprovalsTransferDetails/> */}
         <TransferDetailsEmployeeData/>
        <TransferDetailsDisplayHandler setTransferDate={setTransferDate}/>

        <TransferButtonComponentHandler transferDate={transferDate}/>
       
    </div>
  )
}

export default TransferDetailsDisplayContainer