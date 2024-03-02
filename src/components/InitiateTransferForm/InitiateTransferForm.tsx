import React from 'react'
import styles from './InitiateTransferForm.module.css'
import { Input } from 'antd';

const { Search } = Input;

const InitiateTransferForm = () => {
  return (
    <>
    <Search placeholder="input search loading default" loading className={styles.form_element} />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
    </>
  )
}

export default InitiateTransferForm