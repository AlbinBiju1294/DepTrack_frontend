import React, { useEffect, useState } from 'react';
import { Table ,Button, Flex} from 'antd';
import type { TableColumnsType, TableProps} from 'antd';
import { Pagination } from 'antd';
import axios from 'axios';
import {dataSourceType } from './types';
import styles from './PendingApprovalsTable.module.css'
import { useNavigate } from 'react-router-dom';
import { Display } from 'react-bootstrap-icons';


  
const PendingApprovalsTable = ({dataSource}: {dataSource: dataSourceType[]} ) => {
    
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize,setPageSize] = useState(8);
  const totalItems = dataSource.length;
  
  const pageSizeOptions = ['1','5', '8', '10', '20', '50'];


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setCurrentPage(current); // Update current page if needed
    setPageSize(size); // Update page size
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentItems = dataSource.slice(startIndex, endIndex);

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
            <button type='button' className={styles.button} onClick={() => handleButtonClick(record)}> <p style={{color:"#FFFF"}}>{'>'}</p>          <span className={styles.approveText}>View Details</span>
            </button>
            ),
          },
        ];
      
        const handleButtonClick = (record: dataSourceType) => {
          console.log('Button clicked for record:', record);
          const id = record.id; 
          navigate(`/transferdetailsdisplay/${id}`)
        };
       
        
    
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <Table className={styles.table} columns={columns}  dataSource={currentItems} pagination={false} />
      <Pagination
          size="small"
          showSizeChanger
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onShowSizeChange={handlePageSizeChange}
          onChange={handlePageChange}
          pageSizeOptions={pageSizeOptions}
          className={styles.pagination}
        />
    </div>
  )
}

export default PendingApprovalsTable

