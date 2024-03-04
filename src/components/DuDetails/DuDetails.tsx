import React from 'react'
import styles from './DuDetails.module.css' 
import { useEffect, useState } from 'react';
import axios from 'axios';
import DuDetailsCard from '../DuDetailsCard/DuDetailsCard';
 
 
export interface DuDetailsProps {
    du_name: string|null;
    no_of_pms:  number;
    no_of_employees:number;
  }
 
const DuDetails =() => {
 
  const [duData,setDuData] = useState<DuDetailsProps>();
 
  const token = localStorage.getItem('access_token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/delivery-unit/dashboard-du-details', config);
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
    <div className={`${styles.header}`}>Du Details</div>
    <div className={`${styles.card}`}>
     
      <DuDetailsCard name="Delivery Unit Name :" value={duData?duData.du_name: ""}/>
      <DuDetailsCard name="Number Of PMs :" value={duData?duData.no_of_pms:""}/>
      <DuDetailsCard name="Number of Employees :" value={duData?duData.no_of_employees:""}/>
 
    </div>
    </div>
  )
}
export default DuDetails