import { Button, Modal } from 'antd';
import Dropdown from "react-dropdown";
import styles from './TransferButtonComponent.module.css';
import { TransferButtonComponentPropsType } from './types';

const TransferButtonComponent = ({
  contextHolder, 
  showModal, 
  open,
  handleOk,
  handleDateChange,
  pmOptions,
  handleSelectPm,
  transferDate
  }: TransferButtonComponentPropsType) => {
    console.log("butnComponent",transferDate);
    
  return (
    <>
    {contextHolder}
    <div className={styles.FormButton}>
      <Button onClick={showModal}>Approve</Button>
      <Button onClick={handleOpenReject}>Reject</Button>

      <Modal
        open={open}
        title={<span className={styles.customTitle}>Enter Approval Details</span>}
        centered
        onOk={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <div className={styles.modalContentContainer}>
          <div className={styles.transferDateDiv}>
              <label className={styles.transferDateLabel}>Select Acceptance Date : </label>
              <input
                type="date"
                name="transfer_date"
                value={transferDate}
                onChange={(e) => {
                  handleDateChange(e);
                }}
                className={styles.transferDateInput}
              />
          </div>
          <div className={styles.transferDateDiv}>
              <label className={styles.transferDateLabel}>Select Project Manager :</label>
              <Dropdown
                options={pmOptions}
                value="Select a project manager"
                className={styles.pmSelectDropdown}
                controlClassName={styles.input_drop_control}
                onChange={(selectedOption) =>
                  handleSelectPm(selectedOption)
                }
                placeholder="Select an option"
              />
          </div>
        </div>
      </Modal>

    </div>
    </>
    
  )
}

export default TransferButtonComponent