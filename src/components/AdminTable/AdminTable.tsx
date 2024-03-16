import { Table, Pagination, Modal } from "antd";
import { AdminTablePropsType } from "./types";
import styles from "./AdminTable.module.css";
import "./AntTable.css";
import Dropdown from "react-dropdown";

const AdminTable = ({
  adminDataSource,
  columns,
  current,
  pageSize,
  total,
  duHeadOptions,
  hrbpOptions,
  onShowSizeChange,
  onChange,
  addDu,
  handleCloseAddDu,
  open,
  pageSizeOptions,
}: AdminTablePropsType) => {
  return (
    <div className={styles.inner_container}>
      <div className={styles.uploadfile_whole}>
        <button className={styles.button1} onClick={addDu} type="button">
          <p style={{ color: "#FFFF" }}>{"Add DU"}</p>
        </button>
      </div>
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
      <Modal
        open={open}
        centered
        title="Add Du"
        onCancel={handleCloseAddDu}
        footer={null}
      >
        <label className={styles.transferDateLabel}>
          Select Delivery Unit Head :
        </label>
        <Dropdown
          options={duHeadOptions}
          className={styles.pmSelectDropdown}
          controlClassName={styles.input_drop_control}
          // onChange={(selectedOption) =>
          //   handleSelectPm(selectedOption)
          // }
          placeholder="Select an option"
        />
        <label className={styles.transferDateLabel}>Select HRBP :</label>
        <Dropdown
          options={hrbpOptions}
          className={styles.pmSelectDropdown}
          controlClassName={styles.input_drop_control}
          // onChange={(selectedOption) =>
          //   handleSelectPm(selectedOption)
          // }
          placeholder="Select an option"
        />
      </Modal>
    </div>
  );
};

export default AdminTable;
