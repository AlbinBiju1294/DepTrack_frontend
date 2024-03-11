import React, { useEffect, useState } from 'react';
// import './index.css';
import { Table } from 'antd';
import type { PaginationProps, TableColumnsType, TableProps } from 'antd';
import {Tag} from 'antd';
import axios from 'axios';
import TransferHistoryTableHandler from './TransferHistoryTableHandler'
import { HandlePaginationChangeType, dataSourceType, TransferHistoryTablePropsType } from './types';

  
const TransferHistoryTable = ({dataSource, pagination, handlePaginationChange}: TransferHistoryTablePropsType ) => {
    
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
            title: 'Transferred From',
            dataIndex: ['currentdu', 'du_name'],
        },
        {
            title: 'Transferred To',
            dataIndex: ['targetdu', 'du_name'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => {
                let color = 'green'; // Default color
                if (status === "Rejected") 
                    color = 'red';
                else if (status === "Completed") 
                    color = 'green';
                else if( status === "Cancelled")
                    color = "#808080"
                return (
                    <Tag color={color}>
                    {status}
                    </Tag>
                );
            },
        },
        {
            title: 'Transfer Date',
            dataIndex: 'transfer_date',
        },
      ];
    
  return (
    <div>
      <Table 
      columns={columns}
       dataSource={dataSource} 
       pagination={pagination}
       onChange={handlePaginationChange}
    />
    </div>
  )
}

export default TransferHistoryTable

