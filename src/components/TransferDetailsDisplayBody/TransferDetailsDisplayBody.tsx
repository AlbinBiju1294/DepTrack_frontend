import React from 'react'
import styles from './TransferDetailsDisplayBody.module.css'
import {TransferDetailsDisplayBodyProps} from './types/index'


const TransferDetailsDisplayBody = (props:TransferDetailsDisplayBodyProps) => {
  return (
    <div>
      <div className={`${styles.Form_data}`}>
      <div>{props.name} {props.value}</div>
      </div>
    </div>
  )
}

export default TransferDetailsDisplayBody
