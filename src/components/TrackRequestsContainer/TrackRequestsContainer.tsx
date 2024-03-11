import React, { useContext, useEffect, useState } from "react";
import styles from "./TrackRequestsContainer.module.css";
import { Button, Modal, Pagination, Space, Table, Tag, message } from "antd";
import type { TableProps } from "antd";
import axiosInstance from "../../config/AxiosConfig";
import UserContext from "../Contexts/UserContextProvider";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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
  const pageSize = 7; // Number of items per page
  const totalItems = initiatedTransfers.length;
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [selectedTransfer, setSelectedTransfer] =
    useState<TransferDetailsType>();
  const du_id = user?.du_id;

  const [messageApi, contextHolder] = message.useMessage();

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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Employee Number",
      dataIndex: ["employee", "employee_number"],
      key: "employee_number",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Employee Name",
      dataIndex: ["employee", "name"],
      key: "employee_name",
    },
    {
      title: "Initiated to",
      dataIndex: ["targetdu", "du_name"],
      key: "initiated_to",
    },
    {
      title: "Initiated by",
      dataIndex: ["initiated_by", "name"],
      key: "initiated_by",
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
    {
      render: (_, record) => (
        <button className={styles.button}>
          <CloseOutlined
            style={{
              color: "white",
              fontSize: "10px",
              verticalAlign: "middle",
            }}
            onClick={() => {
              setOpen(true);
              setSelectedTransfer(record);
              console.log(record.id);
              console.log(record);
            }}
          />
        </button>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      <div className={styles.inner_container}>
        <Table columns={columns} dataSource={currentItems} pagination={false} />
        <Pagination
          simple
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
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
        Are you sure you want to cancel transfer of{" "}
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
