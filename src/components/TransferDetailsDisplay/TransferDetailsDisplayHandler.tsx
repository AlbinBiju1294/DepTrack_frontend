import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormDataDisplayProps } from './types';
import { fetchTransferData } from './api/fetchTransferData';
import TransferDetailsDisplay from './TransferDetailsDispaly';
import {TransferDataDisplayPropsType} from './types/index'

const TransferDetailsDisplayHandler = ({setTransferDate}: {setTransferDate: React.Dispatch<React.SetStateAction<string>>}) => {
    const [formData,setFormData] = useState<FormDataDisplayProps>();
    const {id} = useParams()

    useEffect(() => {
   
        fetchTransferData(id,setFormData,setTransferDate);
      }, []);
    

  return (
    <div>
      <TransferDetailsDisplay formData ={formData}   /> 
    </div>
  )
}

export default TransferDetailsDisplayHandler
