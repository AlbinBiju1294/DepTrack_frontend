import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { Option } from "react-dropdown";
import { pmDataType, datePmPostDataType } from './types';
import { postApprovalData } from './api/postApprovalData';
import TransferButtonComponent from './TransferButtonComponent';
import { fetchPmData } from './api/fetchPmData';


const TransferButtonComponentHandler = ({transferDate}: {transferDate: string}) => {

const navigate = useNavigate();
const [open, setOpen] = useState(false);
const [pmData, setPmData] = useState<pmDataType[]>([])
const [datePmPostData, setDatePmPostData] = useState<datePmPostDataType>({});
const [messageApi, contextHolder] = message.useMessage();
const {id='0'} = useParams();

const showModal = () => {
  setOpen(true);
  setDatePmPostData({...datePmPostData, transfer_id: +id})
};

const handleOk = async (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  try {
    const response = await postApprovalData(datePmPostData);
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

  console.log("butnComponentHandler",transferDate);
  return (
    <div>
      <TransferButtonComponent 
      contextHolder={contextHolder} 
      showModal={showModal}
      open={open}
      handleOk={handleOk}
      handleDateChange={handleDateChange}
      pmOptions={pmOptions}
      handleSelectPm={handleSelectPm}
      transferDate={transferDate}
      ></TransferButtonComponent>
    </div>
  )
}

export default TransferButtonComponentHandler
