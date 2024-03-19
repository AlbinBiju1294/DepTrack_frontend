import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeDataProps} from './types';
import { fetchTransferDetailsEmployeeData } from './api/fetchTransferDetailsEmployeeData';
import TransferDetailsEmployeeData from './TransferDetailsEmployeeData';
 
// To display the employee details like name,designation,email,current and target DU
const TransferDetailsEmployeeDataHandler = ({setCurrentDuNumber}:{setCurrentDuNumber: React.Dispatch<React.SetStateAction<number>>}) => {
   
  const [userData,setUserData] = useState< EmployeeDataProps|undefined>();
  const {id}=useParams()
 
  useEffect(() => {
    fetchTransferDetailsEmployeeData(id,setUserData, setCurrentDuNumber);
  }, []);
 
  return (
    <div>
      <TransferDetailsEmployeeData userData={userData}/>
    </div>
  )
}
 
export default TransferDetailsEmployeeDataHandler