import React, { useEffect, useState } from 'react';
// import './index.css';
import { Table ,Button} from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import axios from 'axios';
import {dataSourceType } from './types';
import styles from './PendingApprovalsTable.module.css'
import { useNavigate } from 'react-router-dom';


  
const PendingApprovalsTable = ({dataSource}: {dataSource: dataSourceType[]} ) => {
    
    const navigate = useNavigate()
    const columns: TableColumnsType<dataSourceType> = [
        {
            title: 'Transfer Id',
            dataIndex: 'id',
        },
        // ...(dataSource.length > 0 ? Object.keys(dataSource[0].employee).filter(key => key !== 'id').map(key => ({
        //     title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter of key
        //     dataIndex: ['employee', key],
        // })) : []),

        {
            title: 'Employee Number',
            dataIndex: ['employee', 'employee_number'],
        },

        {
            title: 'Employee Name',
            dataIndex: ['employee', 'name'],
        },

        {
            title: 'Transfer Initiated From',
            dataIndex: ['currentdu', 'du_name'],
        },

        {
            title: 'Transfer Initiated By',
            dataIndex: ['initiated_by','name'],
        },
        {
            title: 'Transfer Initiated To',
            dataIndex: ['targetdu', 'du_name'],
        },
        {
           
            render: ( _,record) => (
            
            <button type='button' className={styles.button} onClick={() => handleButtonClick(record)}> <p style={{color:"#FFFF"}}>{'>'}</p>  </button>
            ),
          },
        ];
      
        // Function to handle button click
        const handleButtonClick = (record: dataSourceType) => {
          // Handle button click logic here
          console.log('Button clicked for record:', record);
          navigate('/pendingapprovalsform')
        };
       
        
    
  return (
    <div>
      <Table className={styles.table} columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default PendingApprovalsTable

