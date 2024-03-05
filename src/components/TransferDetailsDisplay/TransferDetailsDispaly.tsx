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
      
              
            <TransferDetailsDisplayBody name="1.  Employee Name :" /> 
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
            
            <TransferDetailsDisplayBody value={formData?formData.employee.name: ""}/> 
            <TransferDetailsDisplayBody  value={formData?formData.currentdu_id: ""}/>
            <TransferDetailsDisplayBody value={ "Antony"}/>

            {/* <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/> */}
            <TransferDetailsDisplayBody value={ "A1"}/>
            <TransferDetailsDisplayBody value={ "6 years"}/>
            <TransferDetailsDisplayBody value={ "3 years"}/>




            {/* <TransferDetailsDisplayBody value={formData?formData.details.employee_band: ""}/> */}
            {/* <TransferDetailsDisplayBody value={formData?formData.details.total_experience: ""}/> */}
            {/* <TransferDetailsDisplayBody value={formData?formData.details.experion_experience: ""}/> */}
            <TransferDetailsDisplayBody value={formData?formData.rejection_reason: ""}/>
            <TransferDetailsDisplayBody value={ "Python,C++"}/>
            <TransferDetailsDisplayBody value={ "Machine Learning"}/>
            <TransferDetailsDisplayBody value={ "6"}/>



            {/* <TransferDetailsDisplayBody value={formData?formData.details.employee_skills: ""}/> */}
            {/* <TransferDetailsDisplayBody value={formData?formData.details.upskilling_suggestions: ""} /> */}
            {/* <TransferDetailsDisplayBody value={formData?formData.details.strengths: ""}/> */}
            <TransferDetailsDisplayBody value={formData?formData.transfer_date: ""}/>
            {/* <TransferDetailsDisplayBody value={formData?formData.initiated_by: ""}/> */}
            <TransferDetailsDisplayBody value={ "PM"}/>

            {/* <TransferDetailsDisplayBody value={formData?formData.currentdu_id: ""}/> */}

          </Typography>
        
        </Typography>
      </CardContent>
    </div>
  );
}