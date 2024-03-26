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

  //for handling cancel transfer requests by du_heads
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
        if(user?.role == 2)
        {
          const newInitiatedTransfers = res.data.data.filter((initiatedTransfer:TransferDetailsType) => {
            return initiatedTransfer.initiated_by.id == user.employee_id
          })
          setInitiatedTransfers(newInitiatedTransfers);
        }
        else{
          setInitiatedTransfers(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInitiatedRequests();
  }, []);

  //for setting table columns
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
      width:'152px'
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
      width: user?.role === 1 ? '140px' : undefined,
      key: "status",
      render: (status) => {
        let color = "green"; // Default color
        if (status === "Transfer Initiated") {
          color = "orange";
        } else if (status === "Pending Acceptance") {
          color = "green";
        }
        return <Tag color={color}>{status}</Tag>;
      },
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];
  if (user?.role === 1) {
    columns.push({
        render: (_, record) => (
            <button className={styles.button}
                onClick={() => {
                    setOpen(true);
                    setSelectedTransfer(record);
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