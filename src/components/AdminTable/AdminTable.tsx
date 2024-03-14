import { Table, Pagination, Modal } from "antd";
import { AdminTablePropsType } from "./types";
import styles from "./AdminTable.module.css";
import "./AntTable.css";

const AdminTable = ({
  adminDataSource,
  columns,
  current,
  pageSize,
  total,
  onShowSizeChange,
  onChange,
  open,
  pageSizeOptions,
}: AdminTablePropsType) => {
  return (
    <div className={styles.inner_container}>
      <Table
        columns={columns}
        dataSource={adminDataSource}
        pagination={false}
      />
      <Pagination
        size="small"
        showSizeChanger
        current={current}
        pageSize={pageSize}
        total={total}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        pageSizeOptions={pageSizeOptions}
        className={styles.pagination}
      />
      <Modal open={open} centered title="Cancel Request" footer={null}>
        Are you sure you want to cancel transfer of <br />
        <div className={styles.cancel_popup_buttons}>
          <button className={styles.close_button}>Close</button>
          <button className={styles.cancel_button}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminTable;
