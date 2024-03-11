import React, { useState } from 'react'
import styles from "./TransferDetailsDisplayContainer.module.css"
import TransferDetailsDisplay from "../TransferDetailsDisplay/TransferDetailsDispaly";
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData'
import TransferButtonComponent from '../TransferButtonComponent/TransferButtonComponent';
import TransferButtonComponentHandler from '../TransferButtonComponent/TransferButtonComponentHandler';

const TransferDetailsDisplayContainer = () => {

  const[ transferDate, setTransferDate] = useState("");


  return (
    <div className={styles.inner_container}>
        {/* <h4 className={styles.form_heading}>Please fill the form</h4> */}
        {/* <PendingApprovalsTransferDetails/> */}
         <TransferDetailsEmployeeData/>
        <TransferDetailsDisplay setTransferDate={setTransferDate}/>
        <TransferButtonComponentHandler transferDate={transferDate}/>
       
    </div>
  )
}

export default TransferDetailsDisplayContainer