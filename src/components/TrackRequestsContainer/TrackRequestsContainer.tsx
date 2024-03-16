import styles from "./TrackRequestsContainer.module.css";
import { Modal, Pagination, Table } from "antd";
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
        <Table columns={columns} dataSource={currentItems} pagination={false} scroll={{y:380}} />
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
