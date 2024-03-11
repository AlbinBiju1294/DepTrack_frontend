import {useState} from 'react'
import { Button, Modal,message } from 'antd';
import styles from './TransferButtonComponent.module.css';
import {useParams } from 'react-router-dom';
import axiosInstance from '../../config/AxiosConfig';
import { Input} from 'antd';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const { TextArea } = Input;


const TransferButtonComponent = () => {

  const [open, setOpen] = useState(false);
  const [OpenReject, setOpenReject] = useState(false);
  const [reason, setReason] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()

  const {id} = useParams()

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // logic to handle thetransfer approval
  };







////logic to handle transfer reject

const success = () => {
  messageApi.open({
    type: 'success',
    content: 'Rejection reason submitted successfully!',
    duration:1,
  })
  setTimeout(() => {
    navigate('/pendingapprovals');
  }, 1500);
};

  const handleOpenReject = () => {
      setOpenReject(true);
  };

  const handleCloseReject= () => {
    setOpenReject(false);
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(event.target.value);
      
  };

  const isReasonEntered = reason.trim() !== '';


   //api for reject pop up
  const handleRejectConfirm = async () => {
    console.log(id)
    console.log(reason)
    try {
      const res = await axiosInstance.patch(`http://127.0.0.1:8000/api/v1/transfer/request-rejected`, {
        transfer_id:id,
        rejection_reason: reason
      });

      console.log('Rejection reason submitted successfully:', res.data);
      handleCloseReject();
    } catch (error) {
      console.log('Error submitting rejection reason:', error);
    }


  };


  return (
    <>
    
    <div className={styles.FormButton}>
      <Button onClick={showModal}>Approve</Button>
      <Button  onClick={handleOpenReject}>Reject</Button>

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



      {/* Modal for reject */}
      
    {contextHolder}
       <Modal
        open={OpenReject}
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





