import React, { useContext, useEffect, useState } from "react";
import styles from "./TrackRequestsContainer.module.css";
import { Button, Modal, Pagination, Space, Table, Tag, message } from "antd";
import type { TableProps } from "antd";
import axiosInstance from "../../config/AxiosConfig";
import UserContext from "../Contexts/UserContextProvider";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import './TrackRequests.css'
import { TrackRequestsContainerPropsType } from "./types";

const TrackRequestsContainer = ({
  contextHolder,
  columns,
  currentItems,
  currentPage,
  pageSize,
  totalItems,
  handlePageSizeChange,
  handlePageChange,
  pageSizeOptions,
  open,
  handleOk,
  handleCancel,
  selectedTransfer,
  cancelRequest
}: TrackRequestsContainerPropsType) => {
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
