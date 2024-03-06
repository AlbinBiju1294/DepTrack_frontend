import React, { useEffect, useState } from 'react';
// import './index.css';
import { Table } from 'antd';
import type { PaginationProps, TableColumnsType, TableProps } from 'antd';
import axios from 'axios';
import TransferHistoryTableHandler from './TransferHistoryTableHandler'
import { HandlePaginationChangeType, dataSourceType, TransferHistoryTablePropsType } from './types';

  
const TransferHistoryTable = ({dataSource, pagination, handlePaginationChange}: TransferHistoryTablePropsType ) => {
    
    const columns: TableColumnsType<dataSourceType> = [
        {
            title: 'Transfer Id',
            dataIndex: 'id',
        },
        ...(dataSource.length > 0 ? Object.keys(dataSource[0].employee).filter(key => key !== 'id').map(key => ({
            title: key === 'employee_number' ? 'Employee Number' : key === 'name' ? 'Employee Name' : key.charAt(0).toUpperCase() + key.slice(1), 
            dataIndex: ['employee', key],
        })) : []),
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

