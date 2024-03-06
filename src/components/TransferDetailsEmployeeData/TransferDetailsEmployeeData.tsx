import React from 'react'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
// import styles from './EmployeeDetails.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { EmployeeDataProps} from './types';
import styles from './TransferDetailsEmployeeData.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const TransferDetailsEmployeeData = () => {

        const [userData,setUserData] = useState< EmployeeDataProps|undefined>();

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA5NjExNDQ2LCJpYXQiOjE3MDk2MTE0NDYsImp0aSI6ImFjZmM4MTc0OWRlNDQ4ODdhOTRlYTNhMjZmYjQ1ZDFjIiwidXNlcl9pZCI6MTB9.SXjoSYrF5LqaE1X5tr6VoAEK0Qr-hBbgNFTVnQIZaOM';
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  

  // const token = localStorage.getItem('access_token')
  // const config = {
  // headers: { Authorization: `Bearer ${token}` },
  // };

  useEffect(() => {
      const fetchData = async () => {
        try {
          const transfer_id=3;
          const res = await axios.get(`http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/?transfer_id=${transfer_id}`, config);
          console.log('Response from API:', res.data);
          setUserData(res.data.data);
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
            <Card className= {`${styles.Card}`}>
             <p>{userData?userData.currentdu.du_name:""}</p>
            </Card>

        <div className= {`${styles.Arrow_Container}`}>
            <IconButton className={`${styles.ArrowIcon}`}>
                <ArrowForwardIcon />
            </IconButton>
        </div>

        <div className= {`${styles.CDU_container}`}>
            <Card className= {`${styles.Card}`}>
                <p>{userData?userData.targetdu.du_name:""}</p>
            </Card>
        </div>
    </div>
    </div>
    </>

  )}
export default TransferDetailsEmployeeData


