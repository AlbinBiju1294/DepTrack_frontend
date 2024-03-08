import React, { useContext, useEffect, useState } from 'react'
import styles from './TrackRequestsContainer.module.css'
import { Pagination, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import axiosInstance from '../../config/AxiosConfig';
import UserContext from '../Contexts/UserContextProvider';
import { CloseOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    tags: string[];
}
  

const TrackRequestsContainer = () => {
    const [initiatedTransfers,setInitiatedTransfers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7; // Number of items per page
    const totalItems = initiatedTransfers.length;
    const {user} = useContext(UserContext)
    const du_id = user?.du_id

    const handlePageChange = (page:number) => {
      setCurrentPage(page);
  };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const currentItems = initiatedTransfers.slice(startIndex, endIndex);

    useEffect(() => {
      const fetchInitiatedRequests = async () => {
        try {
          const res = await axiosInstance.get(
            `/api/v1/transfer/track-initiated-requests/?du_id=${du_id}`
          );
          console.log("Response from API - initiated Requests:", res.data.data);
          setInitiatedTransfers(res.data.data);
          console.log(initiatedTransfers)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchInitiatedRequests()
    },[])
    const columns: TableProps<DataType>['columns'] = [
      {
        title: 'Transfer Id',
        dataIndex: ['id'],
        key: 'transfer_id',
        render: (text) => <a>{text}</a>,
      },
        {
          title: 'Employee Number',
          dataIndex: ['employee','employee_number'],
          key: 'employee_number',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Employee Name',
          dataIndex: ['employee','name'],
          key: 'employee_name',
        },
        {
          title: 'Initiated to',
          dataIndex: ['targetdu','du_name'],
          key: 'initiated_to',
        },
        {
            title: 'Initiated by',
            dataIndex: ['initiated_by','name'],
            key: 'initiated_by',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
              let color = 'green'; // Default color
              if (status === "INITIATED-PM") {
                  color = 'red';
              } else if (status === "APPROVED-CDUHEAD") {
                  color = 'green';
              }
              return (
                  <Tag color={color}>
                      {status}
                  </Tag>
              );
          },
        },
        // {
           
        //   render: ( _,record) => (
          
        //   <button type='button' className={styles.button} > <CloseOutlined/>  </button>
        //   ),
        // },
      ];
  return (
    <div className={styles.inner_container}>
        <Table
                columns={columns}
                dataSource={currentItems}
                pagination={false}
            />
        <Pagination
                simple
                current={currentPage}
                pageSize={pageSize}
                total={totalItems}
                onChange={handlePageChange}
                className={styles.pagination}
          />
    </div>
    
  )
}

export default TrackRequestsContainer


