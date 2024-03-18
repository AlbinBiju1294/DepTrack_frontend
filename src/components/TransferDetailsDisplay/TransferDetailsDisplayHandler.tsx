import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormDataDisplayProps, TransferDetailsDisplayHandlerPropsType } from './types';
import { fetchTransferData } from './api/fetchTransferData';
import TransferDetailsDisplay from './TransferDetailsDispaly';

const TransferDetailsDisplayHandler = ({setTransferDate}: TransferDetailsDisplayHandlerPropsType) => {
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
