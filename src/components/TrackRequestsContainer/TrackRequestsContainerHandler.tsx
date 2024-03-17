import React, { useContext, useEffect, useState } from "react";
import styles from "./TrackRequestsContainer.module.css";
import { Tag, message } from "antd";
import type { TableProps } from "antd";
import axiosInstance from "../../config/AxiosConfig";
import UserContext from "../Contexts/UserContextProvider";
import './TrackRequests.css'
import { TransferDetailsType } from "./types";
import TrackRequestsContainer from "./TrackRequestsContainer";

const TrackRequestsContainerHandler = () => {
    const [initiatedTransfers, setInitiatedTransfers] = useState<
    TransferDetailsType[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize,setPageSize] = useState(10); // Number of items per page
  const totalItems = initiatedTransfers.length;
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [selectedTransfer, setSelectedTransfer] =
    useState<TransferDetailsType>();
  const du_id = user?.du_id;

  const [messageApi, contextHolder] = message.useMessage();

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const cancelRequest = async () => {
    try {
      await axiosInstance.post(`/api/v1/transfer/cancel/`, {
        transfer_id: selectedTransfer?.id,
      });
      const newInitiatedTransfers = initiatedTransfers.filter(
        (transfer) => transfer.id !== selectedTransfer?.id
      );

      setInitiatedTransfers(newInitiatedTransfers);
      messageApi.info("Request cancelled", 2);
      handleCancel();

      console.log("Request successfully cancelled");
    } catch (error) {
      console.error("Error cancelling request", error);
    }
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setCurrentPage(current);
    setPageSize(size);
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
        console.log(initiatedTransfers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInitiatedRequests();
  }, []);

  
  const columns: TableProps<TransferDetailsType>["columns"] = [
    {
      title: "Transfer Id",
      dataIndex: ["id"],
      key: "transfer_id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Employee Number",
      dataIndex: ["employee", "employee_number"],
      key: "employee_number",
      sorter: (a, b) => a.employee.employee_number.localeCompare(b.employee.employee_number),
      width:'160px'
    },
    {
      title: "Employee Name",
      dataIndex: ["employee", "name"],
      key: "employee_name",
      sorter: (a, b) => a.employee.name.localeCompare(b.employee.name),
    },
    {
      title: "Initiated To",
      dataIndex: ["targetdu", "du_name"],
      key: "initiated_to",
      sorter: (a, b) => a.targetdu.du_name.localeCompare(b.targetdu.du_name),
    },
    {
      title: "Initiated By",
      dataIndex: ["initiated_by", "name"],
      key: "initiated_by",
      sorter: (a, b) => a.initiated_by.name.localeCompare(b.initiated_by.name),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width:'140px',
      render: (status) => {
        let color = "green"; // Default color
        if (status === "Transfer Initiated") {
          color = "red";
        } else if (status === "Pending Acceptance") {
          color = "green";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];
  if (user?.role === 1) {
    columns.push({
        render: (_, record) => (
            <button className={styles.button}
                onClick={() => {
                    setOpen(true);
                    setSelectedTransfer(record);
                    console.log(record.id);
                    console.log(record);
                }}>
                Cancel
            </button>
        ),
    });
}
  return (
        <TrackRequestsContainer contextHolder={contextHolder} columns={columns} currentItems={currentItems} currentPage={currentPage} pageSize={pageSize} totalItems={totalItems} handlePageSizeChange={handlePageSizeChange} handlePageChange={handlePageChange} pageSizeOptions={pageSizeOptions} open={open} handleOk={handleOk} handleCancel={handleCancel} selectedTransfer={selectedTransfer} cancelRequest={cancelRequest}/>
  )
}

export default TrackRequestsContainerHandler