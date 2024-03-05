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

        const [userData,setUserData] = useState< EmployeeDataProps>();

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA5MzU0ODU1LCJpYXQiOjE3MDkzNTQ4NTUsImp0aSI6IjlmYWRkNWIwNGNjZTQ4ZmNiNGYwZGY2ZWJlYjQxODQ1IiwidXNlcl9pZCI6MTB9.YZJ1F8TwtpfzXV76bU2x4EhnCgtdDNb1Ca5d-iTGoCo';
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/get-transfer-details/', config);
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
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <AccountCircleIcon  className= {`${styles.Employee_icon_container}`} ></AccountCircleIcon>

        </div>
        <div className= {`${styles.Employee_details_container}`}>
            <h4  className= {`${styles.Employee_name}`}>John Paul</h4> 
            <h4>Assosciate Software Engineer</h4>
            <p>john@experionglobal.com</p>
            {/* <h4>{userData.employee.name}</h4>
                <p>{userData.designation}</p>
                <p>{userData.mail_id}</p> */}
        
        </div>
    </div>



    <div className= {`${styles.Right_Container}`}>
        {/* <div className= {`${styles.CDU_Container}`}> */}
            <Card className= {`${styles.Card}`}>
             {/* <p>{userData.currentdu_id}</p> */}
             <p>DU3</p>
            </Card>
        {/* </div> */}

        <div className= {`${styles.Arrow_Container}`}>
            <IconButton className={`${styles.ArrowIcon}`}>
                <ArrowForwardIcon />
            </IconButton>
        </div>

        <div className= {`${styles.CDU_container}`}>
            <Card className= {`${styles.Card}`}>
                {/* <p>{userData.targetdu_id}</p> */}
                <p>DU4</p>
            </Card>
        </div>
    </div>
    </div>
    </>

  )}
export default TransferDetailsEmployeeData


