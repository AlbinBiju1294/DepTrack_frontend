import {useState} from 'react'
import { Button, Modal } from 'antd';
import styles from './TransferButtonComponent.module.css';

const TransferButtonComponent = () => {

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // logic to handle thetransfer approval
  };

  return (
    <div className={styles.FormButton}>
      <button onClick={showModal}>Approve</button>
      <button>Reject</button>

      <Modal
        open={open}
        title="Enter Approval Details"
        centered
        onOk={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <div className={styles.transferDateDiv}>
            <label className={styles.transferDateLabel}>Transfer Date:</label>
            <input
              type="date"
              name="transfer_date"
              className={styles.transferDateInput}
            />
        </div>
        
      </Modal>

    </div>
  )
}

export default TransferButtonComponent