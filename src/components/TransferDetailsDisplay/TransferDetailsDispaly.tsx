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

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA5MzU0ODU1LCJpYXQiOjE3MDkzNTQ4NTUsImp0aSI6IjlmYWRkNWIwNGNjZTQ4ZmNiNGYwZGY2ZWJlYjQxODQ1IiwidXNlcl9pZCI6MTB9.YZJ1F8TwtpfzXV76bU2x4EhnCgtdDNb1Ca5d-iTGoCo';
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/', config);
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
      
              
            <TransferDetailsDisplayBody name="1.  Employee Id :" /> 
            <TransferDetailsDisplayBody name="2.  Current Department :" />
            <TransferDetailsDisplayBody name="3.  Current Department Head:"/>
            <TransferDetailsDisplayBody name="4.  Band:"/>
            <TransferDetailsDisplayBody name="5.  Total Experience:"/>
            <TransferDetailsDisplayBody name="6.  Experience in Experion:"/>
            <TransferDetailsDisplayBody name="7.  Reason for Release:"/>
            <TransferDetailsDisplayBody name="8.  Skills:"/>
            <TransferDetailsDisplayBody name="9.  Upskilling Suggestions:"/>
            <TransferDetailsDisplayBody name="10. Strength:"/>
            <TransferDetailsDisplayBody name="11. Transfer Date:"/>
            <TransferDetailsDisplayBody name="12. Initiated by:"/>


          </Typography >
       

              {/* value={duData?duData.du_name: ""} */}
          <Typography className={`${styles.Form_right_side}`}color="text.secondary" gutterBottom>
            
            <TransferDetailsDisplayBody value={formData?formData.du_name: ""}/> 
            <TransferDetailsDisplayBody  value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""} />
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/>

          </Typography>
        
        </Typography>
      </CardContent>
    </div>
  );
}