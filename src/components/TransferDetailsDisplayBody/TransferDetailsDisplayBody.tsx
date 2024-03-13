import React from 'react'
import styles from './TransferDetailsDisplayBody.module.css'
import {TransferDetailsDisplayBodyProps} from './types/index'


const TransferDetailsDisplayBody = (props:TransferDetailsDisplayBodyProps) => {
  return (
  
        <div className={`${styles.Form_data}`}>
        {props.name} {props.value}
      </div>
      
  )
}

export default TransferDetailsDisplayBody






