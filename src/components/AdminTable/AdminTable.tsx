import { Table, Pagination, Modal } from "antd";
import { AdminTablePropsType } from "./types";
import styles from "./AdminTable.module.css";
import "./AntTable.css";
import Dropdown from "react-dropdown";
import { Button } from "@mui/material";

const AdminTable = ({
  contextHolder,
  adminDataSource,
  columns,
  current,
  pageSize,
  total,
  duHeadOptions,
  hrbpOptions,
  duNameInputboxRef,
  duHeadInputRef,
  duHrbpInputRef,
  onChange,
  addDu,
  handleCloseAddDu,
  onShowSizeChange,
  handleSelectDuName,
  handleSelectHrbp,
  handleSelectDuHead,
  onSubmit,
  open,
  pageSizeOptions,
}: AdminTablePropsType) => {
  return (
    <div className={styles.inner_container}>
      {contextHolder}
      <div className={styles.uploadfile_whole}>
        <button className={styles.button1} onClick={addDu} type="button">
          <p style={{ color: "#FFFF" }}>{"Add DU"}</p>
        </button>
      </div>
      <Table
        rowKey={(record) => record.du.id.toString()}
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
        footer={[
          <Button
            variant="outlined"
            color="success"
            type="submit"
            size="small"
            onClick={onSubmit}
          >
            Submit
          </Button>,
        ]}
      >
        <div className={styles.formGroup}>
          <label className={styles.label}>Enter Delivery Unit Name:</label>
          <input
            type="text"
            required
            ref={duNameInputboxRef}
            placeholder="Enter Du Name"
            onChange={(e) => {
              handleSelectDuName(e);
            }}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Select Delivery Unit Head :</label>
          <Dropdown
            options={duHeadOptions}
            ref={duHeadInputRef}
            className={styles.dropdown}
            controlClassName={styles.dropdownControl}
            placeholder="Select an option"
            onChange={(selectedOption) => handleSelectDuHead(selectedOption)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Select HRBP :</label>
          <Dropdown
            ref={duHrbpInputRef}
            options={hrbpOptions}
            className={styles.dropdown}
            controlClassName={styles.dropdownControl}
            placeholder="Select an option"
            onChange={(selectedOption) => handleSelectHrbp(selectedOption)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AdminTable;
