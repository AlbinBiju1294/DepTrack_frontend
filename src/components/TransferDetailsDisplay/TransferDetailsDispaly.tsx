import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TransferDetailsDisplayBody from '../TransferDetailsDisplayBody/TransferDetailsDisplayBody';
import {FormDataDisplayProps} from './types/index';
import styles from './TransferDetailsDisplay.module.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import TransferDetailsEmployeeData from '../TransferDetailsEmployeeData/TransferDetailsEmployeeData';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/AxiosConfig';


export default function TransferDetailsDisplay({setTransferDate}: {setTransferDate: React.Dispatch<React.SetStateAction<string>>}) {


  const [formData,seFormData] = useState<FormDataDisplayProps>();
  const {id} = useParams()


useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await axiosInstance.get(`http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/?transfer_id=${id}`);
        console.log('Response from API:', res.data);
        seFormData(res.data.data);
        setTransferDate(res.data.data?.transfer_date ?? '')
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


console.log(formData)


  return (
    <div className={`${styles.Form_Outer_Card}`}>
      <CardContent>
        



        <div className={styles.Form_Inner_container}>
          <div className={styles.Form_left_side}>
            <div className={`${styles.Form_data}`}>
              <TransferDetailsDisplayBody name="1.  Employee id :" /> 
              <TransferDetailsDisplayBody name="2.  Current Department:" />
              <TransferDetailsDisplayBody name="3.  Band:"/>
              <TransferDetailsDisplayBody name="4.  Total Experience:"/>
              <TransferDetailsDisplayBody name="5.  Experience in Experion:"/>
              <TransferDetailsDisplayBody name="6.  Reason for Release:"/>
              <TransferDetailsDisplayBody name="7.  Skills:"/>
              <TransferDetailsDisplayBody name="8.  Upskilling Suggestions:"/>
              <TransferDetailsDisplayBody name="19. Strength:"/>
              <TransferDetailsDisplayBody name="10. Transfer Date:"/>
              <TransferDetailsDisplayBody name="11. Initiated by:"/>
          </div>
          </div>

          <div className={styles.Form_right_side}>
            <div className={`${styles.Form_data}`}>
             <TransferDetailsDisplayBody value={formData?formData.employee.id: ""}/>  
              <TransferDetailsDisplayBody value={formData?formData.currentdu.du_name: ""}/>
              <TransferDetailsDisplayBody value={formData?.details?.employee_band || "-"}/>   
              <TransferDetailsDisplayBody value={formData?.details?.total_experience + " years" || "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.experion_experience + " years" || "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.releaseReason ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.employee_skills ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.upskilling_suggestions ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.strengths ?? "-"} />
              <TransferDetailsDisplayBody value={formData?formData.transfer_date: ""}/>
              <TransferDetailsDisplayBody value={formData?formData.initiated_by.name:""}/>    
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
}




