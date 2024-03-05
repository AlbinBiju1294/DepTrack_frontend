import React, { useEffect, useState } from 'react';
// import './index.css';
import { Table } from 'antd';
import type { PaginationProps, TableColumnsType, TableProps } from 'antd';
import axios from 'axios';
import { HandlePaginationChangeType, dataSourceType, PendingApprovalsTablePropsType } from './types';
import styles from './TransferHistoryTable.module.css'

  
const PendingApprovalsTable = ({dataSource, pagination, handlePaginationChange}: PendingApprovalsTablePropsType ) => {
    
    const columns: TableColumnsType<dataSourceType> = [
        {
            title: 'Transfer Id',
            dataIndex: 'id',
        },
        ...(dataSource.length > 0 ? Object.keys(dataSource[0].employee).filter(key => key !== 'id').map(key => ({
            title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter of key
            dataIndex: ['employee', key],
        })) : []),

        {
            title: 'Employee Number',
            dataIndex: ['employee', 'employee_number'],
        },

        {
            title: 'Employee Name',
            dataIndex: ['employee', 'name'],////
        },

        {
            title: 'Transfer Initiated From',
            dataIndex: ['currentdu', 'du_name'],
        },

        {
            title: 'Transfer Initiated By',
            dataIndex: ['status'],///////
        },
        {
            title: 'Transfer Initiated To',
            dataIndex: ['targetdu', 'du_name'],
        },
       
      ];
    
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} pagination={pagination}
                onChange={handlePaginationChange} />
    </div>
  )
}

export default PendingApprovalsTable

