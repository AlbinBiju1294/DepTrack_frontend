

import React, { useState ,useEffect} from 'react';
// import styles from './RejectTransfer.module.css';

// import TextField from '@mui/material/TextField';
// import axiosInstance from "../../config/AxiosConfig";
// import { Button, Modal,message } from 'antd';


// import {useParams } from 'react-router-dom';




// export default function RejectTransfer() {
//   const [open, setOpen] = useState(false);
//   const [reason, setReason] = useState<string>('');
//   const [messageApi, contextHolder] = message.useMessage();

//   const {id} = useParams()


 
//   const success = () => {
//     messageApi.open({
//       type: 'success',
//       content: 'Rejection reason submitted successfully!',
//     });
//   };


 

//   const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setReason(event.target.value);
//   };

//   const isReasonEntered = reason.trim() !== '';



//   const handleConfirm = async () => {
//     console.log(id)
//     console.log(reason)
//     try {
//       const res = await axiosInstance.patch(`http://127.0.0.1:8000/api/v1/transfer/request-rejected`, {
//         transfer_id:id,
//         rejection_reason: {reason}
//       });

//       console.log('Rejection reason submitted successfully:', res.data);
//       handleClose();
//     } catch (error) {
//       console.log('Error submitting rejection reason:', error);
//     }
//   };
      


//   const handleOpen = () => {
   
//       setOpen(true);
   
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//     {contextHolder}

//       <Button  size="small" className={`${styles.Reject}`} onClick={() => handleOpen()}>
//         Reject
//       </Button>
//       <Modal
//         open={open}
//         onOk={handleOpen}
//         onCancel={handleClose}
        
//         title="Title"
        
//         footer={[
//           <Button key="back"  disabled={!isReasonEntered} onClick={() => {
//             {handleConfirm()}
//             {success()}
//           }}
//           size="small">
//             Confirm
//           </Button>,
         
         
//         ]}
//       >
//         <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="reason"
//             label="Reason"
//             type="text"
//             fullWidth
//             multiline
//             value={reason}
//             onChange={handleReasonChange}
//             inputProps={{ style: { minHeight: '100px' } }}
//           />
        
//       </Modal>
//     </>
//   );
// };

