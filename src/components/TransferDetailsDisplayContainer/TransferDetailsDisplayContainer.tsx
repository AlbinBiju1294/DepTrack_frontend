import React, { useState } from 'react'
import styles from "./TransferDetailsDisplayContainer.module.css"
import TransferDetailsDisplay from "../TransferDetailsDisplay/TransferDetailsDispaly";
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData'
import TransferButtonComponent from '../TransferButtonComponent/TransferButtonComponent';
import TransferButtonComponentHandler from '../TransferButtonComponent/TransferButtonComponentHandler';
import TransferDetailsDisplayHandler from '../TransferDetailsDisplay/TransferDetailsDisplayHandler';

const TransferDetailsDisplayContainer = () => {

  const[ transferDate, setTransferDate] = useState("");
  const[currentDuNumber, setCurrentDuNumber] = useState(0);


  return (
    <div className={styles.inner_container}>
        <TransferDetailsEmployeeData setCurrentDuNumber={setCurrentDuNumber}/>
        <TransferDetailsDisplayHandler setTransferDate={setTransferDate} />
        <TransferButtonComponentHandler transferDate={transferDate} currentDuNumber={currentDuNumber}/>
    </div>
  )
}

export default TransferDetailsDisplayContainer