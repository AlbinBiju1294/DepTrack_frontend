import React, { useContext, useEffect, useState } from "react";
import "./Initiate.css";
import "react-dropdown/style.css";
import UserContext from "../Contexts/UserContextProvider";
import { Employee, Du, FormDataType} from "./types";
import { fetchEmployeeData } from "./api/fetchEmployeeData";
import { fetchDuData } from "./api/fetchDuData";
import { fetchBandData } from "./api/fetchBandData";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { postTransferData } from "./api/postTransferData";
import InitiateTransferForm from "./InitiateTransferForm";

const InitiateTransferFormHandler = () => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [duData, setDuData] = useState<Du[]>([]);
  const [bands, setBands] = useState<string[]>([]);
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState<FormDataType>({});
  const [isChecked, setIsChecked] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading,setLoading] = useState<boolean>(false)

  const navigate = useNavigate();

  //for setting options for du dropdown
  const options = duData
  .filter(du => du.id !== user?.du_id)
  .map(du => ({ value: du, label: du.du_name }));

  //for setting the band dropdown
  const bandData = bands.map((band) => {
    return {value:band, label:band};
  });

  //on searchKeyword change employees which match that keyword is fetched
  useEffect(() => {
    fetchEmployeeData(searchKeyword, setEmployeeData, user?.employee_id);
  }, [searchKeyword]);

  //for fetching du data
  useEffect(() => {
    fetchDuData(setDuData);
  }, []);

  //for fetching band data
  useEffect(() => {
    fetchBandData(setBands);
  }, []);

  const changeKeyword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchKeyword(e.target.value);
  };

  // function to post the transfer details
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await postTransferData(formData);
      if (res?.status) {
        setLoading(false)
        await messageApi.success(res.message, 1);
        navigate("/trackrequests");
      } else if (res?.status == false) {
        setLoading(false)
        await messageApi.error(res.message, 1);
      }
    } catch (error) {
      setLoading(false)
      console.error("Error:", error);
      alert("An error occurred while processing the transfer.");
    }
  };

  //for automatically setting du_id and status
  useEffect(() => {
    let newStatus: number;
    if (user?.role === 1) {
      newStatus = 2;
    } else {
      newStatus = 1;
    }
    console.log(newStatus);
    setFormData((prevState) => ({
      ...prevState,
      currentdu_id: user?.du_id,
      status: newStatus,
    }));
  }, []);

  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value != "") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAutocompleteChange = (selectedValue: Employee | null) => {
    if (selectedValue === null) {
      setSelectedEmployee(null);
      setFormData({
        ...formData,
        employee_id: null,
      });
      setEmployeeData([])
    } else {
      setSelectedEmployee(selectedValue);
      setFormData({
        ...formData,
        employee_id: selectedValue.id,
      });
    }
  };

  const handleBandDropdownChange = (selectedOption: string | undefined) => {
    console.log(selectedOption)
    setFormData({
      ...formData,
      employee_band: selectedOption, // Assuming selectedOption.value is the band value
    });
  };

  const handleDuDropdownChange = (selectedOption: Du | undefined ) => {
    setFormData({
      ...formData,
      targetdu_id: selectedOption?.id,
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };
  
  return (
    <div>
        <InitiateTransferForm loading={loading} employeeData={employeeData} selectedEmployee={selectedEmployee} bands={bandData} isChecked={isChecked} contextHolder={contextHolder} options={options} changeKeyword={changeKeyword} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleAutocompleteChange={handleAutocompleteChange} handleBandDropdownChange={handleBandDropdownChange} handleDuDropdownChange={handleDuDropdownChange} handleCheckboxChange={handleCheckboxChange}/>
    </div>
  )
}

export default InitiateTransferFormHandler