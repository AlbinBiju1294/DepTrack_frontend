import React, { useContext, useEffect, useRef } from "react";
import TransferHistoryTable from "./TransferHistoryTable";
import axiosInstance from "../../config/AxiosConfig";
import HistoryDataContext from "../Contexts/HistoryDataContextProvider";
import FilterComponent from "../FilterComponent/FilterComponent";
const TransferHistoryTableHandler = () => {
  const filterComponentRef = useRef(null); //trying to access filtered
  const { dataSource, setDataSource, pagination, setPagination } =
    useContext(HistoryDataContext);
  // Initial pagination state

  const fetchData = async (page: number) => {
    try {
      const limit = pagination.pageSize;
      const offset = (page - 1) * limit;
      const res = await axiosInstance.get(
        `/api/v1/transfer/list-transfer-history/?${
          limit ? `limit=${limit}` : ""
        }${offset ? `&offset=${offset}` : ""}`
      );
      const responseData = res.data.data;
      console.log("Transfer history: ", responseData.results);
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: page,
        total: responseData.count,
      }));
      setDataSource(responseData.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  
  const handlePaginationChange = (newPagination: any) => {
    fetchData(newPagination.current);
  };

  return (
    <div>
      <TransferHistoryTable
        dataSource={dataSource}
        pagination={pagination}
        handlePaginationChange={handlePaginationChange}
      ></TransferHistoryTable>
    </div>
  );
};

export default TransferHistoryTableHandler;
