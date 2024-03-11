
import React, { useEffect, useState } from 'react';
import TransferHistoryTable from './TransferHistoryTable'
import axiosInstance from '../../config/AxiosConfig';

const TransferHistoryTableHandler = () => {
    const [dataSource, setDataSource] = useState([])
    const [pagination, setPagination] = useState({ current: 1, total: 0, pageSize: 5 }); // Initial pagination state

    const fetchData = async (page: number) => {
        try {
            const limit = pagination.pageSize;
            const offset = (page - 1) * limit;
            const res = await axiosInstance.get(`/api/v1/transfer/list-transfer-history/?${limit?`limit=${limit}`:""}${offset?`&offset=${offset}`:""}`);
            const responseData = res.data.data;
            console.log("Transfer history: ", responseData.results);
            setPagination(prevPagination => ({
                ...prevPagination,
                current: page,
                total: responseData.count
            }));
            setDataSource(responseData.results)
        } 
        catch (error) {
        console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData(1);
    },[]);

    const handlePaginationChange = (newPagination: any) => {
        fetchData(newPagination.current);
    };

  return (
    <div>
      <TransferHistoryTable dataSource={dataSource} pagination={pagination} handlePaginationChange={handlePaginationChange}></TransferHistoryTable>
    </div>
  )
}

export default TransferHistoryTableHandler
