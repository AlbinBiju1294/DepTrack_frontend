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

        {
            title: 'Employee Number',
            dataIndex: ['employee', 'employee_number'],
        },

        {
            title: 'Employee Name',
            dataIndex: ['employee', 'name'],
        },

        {
            title: 'Initiated From',
            dataIndex: ['currentdu', 'du_name'],
        },

        {
            title: 'Initiated By',
            dataIndex: ['initiated_by','name'],
        },
        {
            title: 'Initiated To',
            dataIndex: ['targetdu', 'du_name'],
        },
        {
            render: ( _,record) => (
            <button type='button' className={styles.button} onClick={() => handleButtonClick(record)}> <p style={{color:"#FFFF"}}>{'>'}</p>  </button>
            ),
          },
        ];
      
        const handleButtonClick = (record: dataSourceType) => {
          console.log('Button clicked for record:', record);
          const id = record.id; 
          navigate(`/transferdetailsdisplay/${id}`)
        };
       
        
    
  return (
    <div>
      <Table className={styles.table} columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default PendingApprovalsTable

