import React, { useContext, useEffect, useState } from "react";
import styles from "./TrackRequestsContainer.module.css";
import { Button, Modal, Pagination, Space, Table, Tag, message } from "antd";
import type { TableProps } from "antd";
import axiosInstance from "../../config/AxiosConfig";
import UserContext from "../Contexts/UserContextProvider";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import './TrackRequests.css'

interface Employee {
  designation: string;
  employee_number: string;
  id: number;
  mail_id: string;
  name: string;
}

interface DuName {
  du_name: string;
}

export interface TransferDetailsType {
  currentdu: DuName;
  employee: Employee;
  id: number;
  initiated_by: Employee;
  status: string;
  targetdu: DuName;
  transfer_date: string;
}

const TrackRequestsContainer = () => {
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

  const pageSizeOptions = [ '10', '20', '30', '40', '50'];

  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const cancelRequest = async () => {
    try {
      const res = await axiosInstance.post(`/api/v1/transfer/cancel/`, {
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
    setCurrentPage(current); // Update current page if needed
    setPageSize(size); // Update page size
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
    // {
    //   render: (_, record) => (
    //     <button className={styles.button}
    //      onClick={() => {
    //       setOpen(true);
    //       setSelectedTransfer(record);
    //       console.log(record.id);
    //       console.log(record);
    //     }}>
    //       Cancel
    //     </button>
    //   ),
    // },
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
    <>
      {contextHolder}
      <div className={styles.inner_container}>
        <Table columns={columns} dataSource={currentItems} pagination={false} scroll={{y:500}} />
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
      <Modal
        open={open}
        centered
        title="Cancel Request"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        Are you sure you want to cancel the Transfer of{" "}
        {selectedTransfer?.employee.name} to{" "}
        {selectedTransfer?.targetdu.du_name} ?
        <br />
        <div className={styles.cancel_popup_buttons}>
          <button className={styles.close_button} onClick={handleCancel}>
            Close
          </button>
          <button className={styles.cancel_button} onClick={cancelRequest}>
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TrackRequestsContainer;
