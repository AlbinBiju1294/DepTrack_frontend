import React from 'react'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import { useState,useEffect } from 'react';
import axios from 'axios'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { EmployeeDataProps} from './types';
import styles from './TransferDetailsEmployeeData.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/AxiosConfig';





const TransferDetailsEmployeeData = () => {
  "Displays the Employee details such as employee name,designation,email id ,current and traget du in the pending approvals page"


  const [userData,setUserData] = useState< EmployeeDataProps|undefined>();
  const {id}=useParams()

  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axiosInstance.get(`http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/?transfer_id=${id}`);
          console.log('Response from API:', res.data);
                   
          setUserData(prev => res.data.data);
          console.log(userData)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


  return (
    <>
      <div  className= {`${styles.Main_wrapping_Container}`}  >
    <div className= {`${styles.Left_Container}`}>
        <div>
            <AccountCircleIcon  className= {`${styles.Employee_icon_container}`} ></AccountCircleIcon>

        </div>
        <div className= {`${styles.Employee_details_container}`}>
            <h4  className= {`${styles.Employee_name}`}>{userData?userData.employee.name:""}</h4>
                <h4>{userData?userData.employee.designation:""}</h4>
                <p>{userData?userData.employee.mail_id:""}</p>
        
        </div>
    </div>


    <div className= {`${styles.Right_Container}`}>
            <div className= {`${styles.Card}`}>
             <p>{userData?userData.currentdu?.du_name:""}</p>
            </div>

        <div className= {`${styles.Arrow_Container}`}>
            <IconButton className={`${styles.ArrowIcon}`}>
                <ArrowForwardIcon />
            </IconButton>
        </div>

        <div className= {`${styles.CDU_container}`}>
            <div className= {`${styles.Card}`}>
                <p>{userData?userData.targetdu.du_name:""}</p>
            </div>
        </div>
    </div>
    </div>
    </>

  )}
export default TransferDetailsEmployeeData


