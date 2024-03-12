import { Button, Modal, Input } from 'antd';
import Dropdown from "react-dropdown";
import styles from './TransferButtonComponent.module.css';
import { TransferButtonComponentPropsType } from './types';

const TransferButtonComponent = ({
  contextHolder, 
  showModal, 
  open,
  handleOk,
  handleCloseApproval,
  handleDateChange,
  pmOptions,
  handleSelectPm,
  transferDate,
  openReject,
  handleOpenReject,
  handleCloseReject,
  isReasonEntered,
  handleRejectConfirm,
  success,
  reason,
  handleReasonChange
  }: TransferButtonComponentPropsType) => {

    const { TextArea } = Input;
    
  return (
    <>
    {contextHolder}
    <div className={styles.FormButton}>
      {/* <Button  size='small'  style={{ backgroundColor: '#5cb85c', color: 'white' }} onClick={showModal}>Approve</Button>
      <Button size='small'style={{ backgroundColor: '#F32013',opacity: "75%", color: 'white' }} onClick={handleOpenReject}>Reject</Button> */}
      <button className={styles.Approve} onClick={showModal}>Approve</button>
      <button className={styles.Reject} onClick={handleOpenReject}>Reject</button>

      {/* Modal for approval */}
      <Modal
        open={open}
        title={<span className={styles.customTitle}>Enter Approval Details</span>}
        centered
        onOk={handleOk}
        onCancel={handleCloseApproval}
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
                defaultValue={transferDate}
                min={transferDate}
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

      {/* Modal for reject */}
       <Modal
        open={openReject}
        title="Enter the Rejection Reason"
        centered
        onCancel={handleCloseReject}
        footer={[
          <Button key="submit" type="primary"  disabled={!isReasonEntered} onClick={() => {
            {handleRejectConfirm()}
            {success()}}}>
            Confirm
          </Button>
        ]}
      >
        <div className={styles.transferDateDiv}>
       
          <TextArea
            autoSize={{ minRows: 4, maxRows: 5 }}
            autoFocus
            required
            id="reason"
            placeholder="Reason"
            style={{ width: '100%', maxHeight: '200px', overflowY: 'auto' }}
            value={reason}
            onChange={handleReasonChange}
          />
       </div>
      </Modal>

    </div>
    </>
    
  )
}

export default TransferButtonComponent





