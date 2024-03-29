import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { Option } from "react-dropdown";
import { pmDataType, DuApproval, datePmPostDataType } from './types';
import { postApprovalData } from './api/postApprovalData';
import TransferButtonComponent from './TransferButtonComponent';
import { fetchPmData } from './api/fetchPmData';
import { patchRejectData } from './api/patchRejectData';
import UserContext from '../Contexts/UserContextProvider';

/*Defines the needed data and its functionalities to render the transfer button component.*/

const TransferButtonComponentHandler = ({transferDate, currentDuNumber}: {transferDate: string, currentDuNumber: number}) => {

const navigate = useNavigate();
const [open, setOpen] = useState(false);
const [pmData, setPmData] = useState<pmDataType[]>([])
const [datePmPostData, setDatePmPostData] = useState<datePmPostDataType>({});
const [messageApi, contextHolder] = message.useMessage();
const {id='0'} = useParams();
const {user} = useContext(UserContext);

//variables for reject modal
const [openReject, setOpenReject] = useState(false);
const [reason, setReason] = useState<string>('');

const [loading, setLoading] = useState(false);

const showModal = () => {
  setOpen(true);
  setDatePmPostData({...datePmPostData, transfer_id: +id, transfer_date: transferDate})
};
const handleCloseApproval= () => {
  setOpen(false);
  setLoading(false);
};

const handleOk = async (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  setLoading(true); 
  try {
    const response = await postApprovalData(datePmPostData, user?.role === 1 && user?.du_id !== currentDuNumber
      ? DuApproval.targetDu
      : DuApproval.currentDu
    );
    if (response?.status) {
      await messageApi.success(response.message, 2);
      navigate('/pendingapprovals')
    } else if (response?.status == false) {
      await messageApi.error(response.message, 2);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while processing the transfer.");
  }
};

const pmOptions = pmData.map(pm => pm.employee_details.name);


const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setDatePmPostData(
    {...datePmPostData,
    transfer_date: e.target.value}
  )
}

const handleSelectPm = (selectedOption: Option) => {
  const selectedPm = pmData.find( pm => pm.employee_details.name === selectedOption.value)
  setDatePmPostData({
    ...datePmPostData,
    newpm_id: selectedPm?.employee_details.id
  })
}

useEffect(()=>{
    fetchPmData(setPmData);
  },[])

  

//logic to handle transfer reject
 
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

  const handleRejectConfirm = async () => {
    try{
      await patchRejectData(id, reason, handleCloseReject);
    }
   catch (error) {
    console.error("Error:", error);
}
  };


  return (
    <div>
      <TransferButtonComponent 
      contextHolder={contextHolder} 
      showModal={showModal}
      open={open}
      handleOk={handleOk}
      loading={loading}
      handleCloseApproval={handleCloseApproval}
      handleDateChange={handleDateChange}
      pmOptions={pmOptions}
      handleSelectPm={handleSelectPm}
      transferDate={transferDate}
      currentDuNumber={currentDuNumber}
      openReject={openReject}
      handleOpenReject={handleOpenReject}
      handleCloseReject={handleCloseReject}
      isReasonEntered={isReasonEntered}
      handleRejectConfirm={handleRejectConfirm}
      success={success}
      reason={reason}
      handleReasonChange={handleReasonChange}
      user={user}
      ></TransferButtonComponent>
    </div>
  )
}

export default TransferButtonComponentHandler
