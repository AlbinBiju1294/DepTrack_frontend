import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TransferDetailsDisplayBody from '../TransferDetailsDisplayBody/TransferDetailsDisplayBody';
import {FormDataDisplayProps} from './types/index';
import styles from './TransferDetailsDisplay.module.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData';



export default function TransferDetailsDisplay() {


  const [formData,seFormData] = useState<FormDataDisplayProps>();

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA5NjExNDQ2LCJpYXQiOjE3MDk2MTE0NDYsImp0aSI6ImFjZmM4MTc0OWRlNDQ4ODdhOTRlYTNhMjZmYjQ1ZDFjIiwidXNlcl9pZCI6MTB9.SXjoSYrF5LqaE1X5tr6VoAEK0Qr-hBbgNFTVnQIZaOM';
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

useEffect(() => {
    const fetchData = async () => {
      try {
        const transfer_id=3;
        const res = await axios.get(`http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/?transfer_id=${transfer_id}`, config);
        console.log('Response from API:', res.data);
        seFormData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className={`${styles.Form_Outer_Card}`}>
      <CardContent>
        <Typography className={`${styles.Form_Inner_container}`}color="text.secondary" gutterBottom>
          <Typography className={`${styles.Form_left_side}`}color="text.secondary" gutterBottom>
      
              
            <TransferDetailsDisplayBody name="1.  Employee id :" /> 
            <TransferDetailsDisplayBody name="2.  Current Department :" />
            <TransferDetailsDisplayBody name="3.  Band:"/>
            <TransferDetailsDisplayBody name="4.  Total Experience:"/>
            <TransferDetailsDisplayBody name="5.  Experience in Experion:"/>
            <TransferDetailsDisplayBody name="6.  Reason for Release:"/>
            <TransferDetailsDisplayBody name="7.  Skills:"/>
            <TransferDetailsDisplayBody name="8.  Upskilling Suggestions:"/>
            <TransferDetailsDisplayBody name="19. Strength:"/>
            <TransferDetailsDisplayBody name="10. Transfer Date:"/>
            <TransferDetailsDisplayBody name="11. Initiated by:"/>

          </Typography >
       

           
          <Typography className={`${styles.Form_right_side}`}color="text.secondary" gutterBottom>
            
            <TransferDetailsDisplayBody value={formData?formData.employee_id: ""}/> 
            {/* <TransferDetailsDisplayBody  value={formData?formData.currentdu.du_name: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.details.employee_band: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.details.total_experience: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.details.experion_experience: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.rejection_reason: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.details.employee_skills: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.details.upskilling_suggestions: ""} />
            <TransferDetailsDisplayBody value={formData?formData.details.strengths: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.transfer_date: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.initiated_by.name:""}/> */}
          
          </Typography>
        
        </Typography>
      </CardContent>
    </div>
  );
}