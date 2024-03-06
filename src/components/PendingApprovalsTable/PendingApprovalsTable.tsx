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
            sorter: (a, b) => a.id - b.id,
        },

        {
            title: 'Employee Number',
            dataIndex: ['employee', 'employee_number'],
                  sorter: (a, b) => a.employee.employee_number.localeCompare(b.employee.employee_number),

        },

        {
            title: 'Employee Name',
            dataIndex: ['employee', 'name'],
            sorter: (a, b) => a.employee.name.localeCompare(b.employee.name),

        },

        {
            title: 'Initiated From',
            dataIndex: ['currentdu', 'du_name'],
            sorter: (a, b) => a.currentdu.du_name.localeCompare(b.currentdu.du_name),

        },

        {
            title: 'Initiated By',
            dataIndex: ['initiated_by','name'],
            sorter: (a, b) => a.initiated_by.name.localeCompare(b.initiated_by.name),

        },
        {
            title: 'Initiated To',
            dataIndex: ['targetdu', 'du_name'],
            sorter: (a, b) => a.targetdu.du_name.localeCompare(b.targetdu.du_name),

        },
        {
            title: 'View',
            render: ( _,record) => (
            <button type='button' className={styles.button} onClick={() => handleButtonClick(record)}> <p style={{color:"#FFFF"}}>{'>'}</p>  </button>
            ),
          },
        ];
      
        // Function to handle button click
        const handleButtonClick = (record: dataSourceType) => {
          console.log('Button clicked for record:', record);
          const id = record.id; 
          navigate(`/pendingapprovals/${id}`)
        };
       
        
    
  return (
    <div>
      <Table className={styles.table} columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default PendingApprovalsTable
