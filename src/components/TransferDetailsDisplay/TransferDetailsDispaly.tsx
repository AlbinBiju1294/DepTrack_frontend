import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TransferDetailsDisplayBody from '../TransferDetailsDisplayBody/TransferDetailsDisplayBody';
import {FormDataDisplayProps} from './types/index';
import styles from './TransferDetailsDisplay.module.css';
import { useState,useEffect } from 'react';
import axios from 'axios';



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
    <Card className={`${styles.Form_Outer_Card}`}>
      <CardContent>
        <Typography className={`${styles.Form_Inner_container}`}color="text.secondary" gutterBottom>
          <Typography className={`${styles.Form_left_side}`}color="text.secondary" gutterBottom>
      
              
            <TransferDetailsDisplayBody name="Employee Id :" /> 
            <TransferDetailsDisplayBody name="Current Department :" />
            <TransferDetailsDisplayBody name="Current Department Head:"/>
            <TransferDetailsDisplayBody name="Band:"/>
            <TransferDetailsDisplayBody name="Total Experience:"/>
            <TransferDetailsDisplayBody name="Experience in Experion:"/>
            <TransferDetailsDisplayBody name="Reason for Release:"/>
            <TransferDetailsDisplayBody name="Skills:"/>
            <TransferDetailsDisplayBody name="Upskilling Suggestions:"/>
            <TransferDetailsDisplayBody name="Strength:"/>
            <TransferDetailsDisplayBody name="Transfer Date:"/>
            <TransferDetailsDisplayBody name="Initiated by:"/>


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
    </Card>
  );
}