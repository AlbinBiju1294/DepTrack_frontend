import { Table, Pagination, Modal } from "antd";
import { AdminTablePropsType } from "./types";
import styles from "./AdminTable.module.css";
import "./AntTable.css";
import Dropdown from "react-dropdown";
import { Button } from "antd";

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
  changeOpen,
  handleCloseChangeDuHead,
  handleChangeDuHeadSelection,
  changeDuHeadInputRef,
  onChangeDuHeadSubmit,
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
        scroll={{ y: 340 }}
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
        title={<span className={styles.customTitle}>Add Du</span>}
        onCancel={handleCloseAddDu}
        footer={[
          <Button
            className={styles.approveSuccessButton}
            key="submit"
            type="primary"
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
        <div className={styles.formGroup1}>
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
      <Modal
        open={changeOpen}
        centered
        onCancel={handleCloseChangeDuHead}
        title={
          <span className={styles.customTitle}>Change Delivery Unit Head</span>
        }
        footer={[
          <Button
            className={styles.approveSuccessButton}
            key="submit"
            type="primary"
            size="small"
            onClick={onChangeDuHeadSubmit}
          >
            Submit
          </Button>,
        ]}
      >
        <div className={styles.transferDateDiv}>
          <label className={styles.transferDateLabel}>
            Select Project Manager :
          </label>
          <Dropdown
            options={duHeadOptions}
            ref={changeDuHeadInputRef}
            className={styles.pmSelectDropdown}
            controlClassName={styles.input_drop_control}
            onChange={(selectedOption) =>
              handleChangeDuHeadSelection(selectedOption)
            }
            placeholder="Select an option"
          />
        </div>
        {/* <div className={styles.formGroup}>
          <label className={styles.label}>Select Delivery Unit Head :</label>
          <Dropdown
            options={duHeadOptions}
            ref={changeDuHeadInputRef}
            className={styles.dropdown}
            controlClassName={styles.dropdownControl}
            placeholder="Select an option"
            onChange={(selectedOption) =>
              handleChangeDuHeadSelection(selectedOption)
            }
          />
        </div> */}
      </Modal>
    </div>
  );
};

export default AdminTable;
