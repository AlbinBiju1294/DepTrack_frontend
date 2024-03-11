import React from 'react'
import styles from './InitiateTransferConatainer.module.css'
import InitiateTransferForm from '../InitiateTransferForm/InitiateTransferForm'
import InitiateTransferFormHandler from '../InitiateTransferForm/InitiateTransferFormHandler'

const InitiateTransferContainer = () => {
  return (
    <div className={styles.inner_container}>
        <h4 className={styles.form_heading}>Please fill the form</h4>
        <InitiateTransferFormHandler/>
    </div>
  )
}

export default InitiateTransferContainer