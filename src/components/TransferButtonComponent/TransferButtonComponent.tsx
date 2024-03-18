import { Button, Modal, Input, Spin } from 'antd';
import Dropdown from "react-dropdown";
import styles from './TransferButtonComponent.module.css';
import { TransferButtonComponentPropsType } from './types';
import { getCurrentDate } from '../InitiateTransferForm/InitiateTransferForm';

const TransferButtonComponent = ({
  contextHolder, 
  showModal, 
  open,
  handleOk,
  loading,
  handleCloseApproval,
  handleDateChange,
  pmOptions,
  handleSelectPm,
  transferDate,
  currentDuNumber,
  openReject,
  handleOpenReject,
  handleCloseReject,
  isReasonEntered,
  handleRejectConfirm,
  success,
  reason,
  handleReasonChange,
  user
  }: TransferButtonComponentPropsType) => {

    const { TextArea } = Input;
    const currentDate = getCurrentDate();
    
  return (
    <>
    {contextHolder}
    <div className={styles.FormButton}>
      <button className={styles.Approve} onClick={showModal}>Approve
</button>
      <button className={styles.Reject} onClick={handleOpenReject}>Reject   
 </button>

      {/* Modal for approval */}
      <Modal
        open={open}
        title={<span className={styles.customTitle}>Enter Approval Details</span>}
        centered
        onOk={handleOk}
        onCancel={handleCloseApproval}
        footer={[
          <Button  className={styles.approveSuccessButton} key="submit" type="primary" size='small' onClick={handleOk} loading={loading}>
            Submit
          </Button>
        ]}
      >
        <div className={styles.modalContentContainer}>
          <div className={styles.transferDateDiv}>
              <label className={styles.transferDateLabel}>Select Effective Transfer Date : </label>
              <input
                type="date"
                name="transfer_date"
                defaultValue={transferDate}
                min={currentDate}
                onChange={(e) => {
                  handleDateChange(e);
                }}
                className={styles.transferDateInput}
              />
          </div>
          {(user?.role == 1 && user?.du_id !== currentDuNumber)
            ? <div className={styles.transferDateDiv} >
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
            : ''
          }
        </div>
      </Modal>

      {/* Modal for reject */}
       <Modal
        open={openReject}
        title ="Enter the Rejection Reason"
        centered
        onCancel={handleCloseReject}
        footer={[
          <Button key="submit" type="primary"size='small' disabled={!isReasonEntered} onClick={() => {
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





