import React from 'react'
import styles from './DuDetails.module.css' 
import { useEffect, useState } from 'react';
import axios from 'axios';
import DuDetailsCard from '../DuDetailsCard/DuDetailsCard';
import axiosInstance from '../../config/AxiosConfig';
 
 
export interface DuDetailsProps {
    du_name: string|null;
    no_of_pms:  number;
    no_of_employees:number;
  }
//To display the du details in the dashboard
const DuDetails =() => {
 
  const [duData,setDuData] = useState<DuDetailsProps>();

 
useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await  axiosInstance.get('http://127.0.0.1:8000/api/v1/delivery-unit/dashboard-du-details');
        console.log('Response from API:', res.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
 
 
return (
    <div className={styles.dudetails}>
    <div className={`${styles.header}`}>DU Details</div>
    <div className={`${styles.card}`}>
     
      <DuDetailsCard name="Delivery Unit Name :" value={duData?duData.du_name: ""}/>
      <DuDetailsCard name="Number Of PMs :" value={duData?duData.no_of_pms:""}/>
      <DuDetailsCard name="Number Of Employees :" value={duData?duData.no_of_employees:""}/>
 
    </div>
    </div>
  )
}
export default DuDetails