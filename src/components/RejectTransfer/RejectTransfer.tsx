

import React, { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import styles from './RejectTransfer.module.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import axiosInstance from "../../config/AxiosConfig";
import {useParams } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ConfirmButton = styled(Button)(({ theme, disabled }) => ({
  backgroundColor: disabled ? 'rgba(232, 96, 96, 0.5)' : 'rgb(232, 96, 96)',
  color: '#FFF',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: disabled ? 'rgba(232, 96, 96, 0.5)' : 'rgb(232, 96, 96)',
  },
}));

export default function RejectTransfer() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<string>('');
  const {id} = useParams()


  const token = localStorage.getItem('access_token')
  const config = {
  headers: { Authorization: `Bearer ${token}` },
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const isReasonEntered = reason.trim() !== '';



  const handleConfirm = async () => {
    try {
      const res = await axiosInstance.patch(`http://127.0.0.1:8000/api/v1/transfer/request-rejected/${id}`, {
        transfer_id:id,
        reason: isReasonEntered
      });

      console.log('Rejection reason submitted successfully:', res.data);
      handleClose();
    } catch (error) {
      console.log('Error submitting rejection reason:', error);
    }
  };
      


  return (
    <div className={styles.FormButton}>
      <Button variant="contained" size="small" className={`${styles.Approve}`}>
        Approve
      </Button>
      <Button variant="contained" size="small" className={`${styles.Reject}`} onClick={() => handleClickOpen()}>
        Reject
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, color: "#012970" }} id="customized-dialog-title">
          Rejection Reason
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          size="small"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "#FFFFF",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent style={{ width: "500px", height: "180px" }} dividers>
          <TextField
            autoFocus
            required
            margin="dense"
            id="reason"
            label="Reason"
            type="text"
            fullWidth
            multiline
            value={reason}
            onChange={handleReasonChange}
            inputProps={{ style: { minHeight: '100px' } }}
          />
        </DialogContent>
        <DialogActions>
          <ConfirmButton
            disabled={!isReasonEntered}
            onClick={handleConfirm}
            size="small"
          >
            Confirm
          </ConfirmButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
        }