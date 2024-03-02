import React from 'react'
import styles from './DuDetailsCard.module.css'
 
 
export interface DuDetailsCardProps {
    name: string;
    value: string |number|null;
  }
const DuDetailsCard = (props:DuDetailsCardProps) => {
  return (
    <div  className={`${styles.body}`}>  
     <p>{props.name} {props.value}</p>
    </div>    
  )
}
 
export default DuDetailsCard