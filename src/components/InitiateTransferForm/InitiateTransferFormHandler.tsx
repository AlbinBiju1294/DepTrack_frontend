import React, { useContext, useEffect, useState } from "react";
import styles from "./InitiateTransferForm.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Initiate.css";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import UserContext from "../Contexts/UserContextProvider";
import { Button, Checkbox } from "@mui/material";
import { Employee, Du, FormDataType, optionType, bandDataType } from "./types";
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
  const [isChecked, setIsChecked] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  //for setting options for du dropdown
  const options = duData.map((du) => {
    return {value:du, label:du.du_name};
  });

  const bandData = bands.map((band) => {
    return {value:band, label:band};
  });

  useEffect(() => {
    fetchEmployeeData(searchKeyword, setEmployeeData);
  }, [searchKeyword]);

  useEffect(() => {
    fetchDuData(setDuData);
  }, []);

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
    try {
      const res = await postTransferData(formData);
      if (res?.status) {
        await messageApi.success(res.message, 1);
        navigate("/trackrequests");
      } else if (res?.status == false) {
        await messageApi.error(res.message, 1);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the transfer.");
    }
  };

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
        <InitiateTransferForm employeeData={employeeData} selectedEmployee={selectedEmployee} bands={bandData} isChecked={isChecked} contextHolder={contextHolder} options={options} changeKeyword={changeKeyword} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleAutocompleteChange={handleAutocompleteChange} handleBandDropdownChange={handleBandDropdownChange} handleDuDropdownChange={handleDuDropdownChange} handleCheckboxChange={handleCheckboxChange}/>
    </div>
  )
}

export default InitiateTransferFormHandler