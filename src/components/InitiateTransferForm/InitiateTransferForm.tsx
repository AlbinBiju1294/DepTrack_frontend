import React, { useContext, useEffect, useState } from "react";
import styles from "./InitiateTransferForm.module.css";
import { Input } from "antd";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import "./Initiate.css";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import UserContext from "../Contexts/UserContextProvider";
import { Button, Checkbox } from "@mui/material";
import { Employee, Du } from "./types";
import { fetchEmployeeData } from "./api/fetchEmployeeData";
import { fetchDuData } from "./api/fetchDuData";
import { fetchBandData } from "./api/fetchBandData";
import axiosInstance from "../../config/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const InitiateTransferForm = () => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [duData, setDuData] = useState<Du[]>([]);
  const [bands, setBands] = useState<string[]>([]);
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate()

  const options = duData.map((du) => {
    return du.du_name;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "http://127.0.0.1:8000/api/v1/transfer/create-transfer/",
        formData
      );
      console.log("Response from API - submission:", res);
      if(res.status === 201)
      {
          await messageApi.success('Transfer initiated successfully');
        
        navigate('/dashboard')
      }
      // Optionally, handle success response here
    } catch (error) {
      await messageApi.error('Transfer initiation failed');
    }
    console.log(formData);
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

  // Handlers for form input changes

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
        employee_id: null, // Assuming employee_id is a string, clear it
      });
    } else {
      setSelectedEmployee(selectedValue);
      setFormData({
        ...formData,
        employee_id: selectedValue.id,
      });
    }
  };

  const handleBandDropdownChange = (selectedOption: Option) => {
    setFormData({
      ...formData,
      employee_band: selectedOption.value, // Assuming selectedOption.value is the band value
    });
  };

  const handleDuDropdownChange = (selectedOption: Option) => {
    const newDuData = duData.filter((du) => {
      return du.du_name === selectedOption.value;
    });
    setFormData({
      ...formData,
      targetdu_id: newDuData[0].id, // Assuming selectedOption.value is the band value
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };

  return (
    <>
    {contextHolder}
    <form onSubmit={handleSubmit}>
      <div className={styles.form_wrapper}>
        <div className={styles.form_row}>
          <div
            className={`${styles.single_transfer_detail} ${styles.emp_name}`}
          >
            <label className={styles.form_label}>Employee Name:</label>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={employeeData}
              getOptionLabel={(employee: Employee) => `${employee.name}`}
              sx={{
                width: 251,
                border: "0.5px solid grey",
                borderRadius: "5px",
              }}
              size="small"
              onChange={(event, value) => handleAutocompleteChange(value)}
              renderOption={(props, option) => (
                <li className={styles.employee_droplist} {...props}>
                  <div className={styles.employee_name}>{option.name}</div>
                  <div className={styles.employee_number}>
                    {option.employee_number}
                  </div>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="searchKeyword"
                  placeholder="search employee"
                  onChange={changeKeyword}
                  InputLabelProps={{}}
                />
              )}
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Employee Number:</label>
            <input
              type="text"
              value={selectedEmployee ? selectedEmployee.employee_number : ""}
              className={styles.input_box}
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Transfer Date:</label>
            <input
              type="date"
              name="transfer_date"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={styles.input_box}
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Target DU:</label>
            <Dropdown
              options={options}
              value='Select Delivery Unit'
              onChange={(selectedOption) =>
                handleDuDropdownChange(selectedOption)
              }
              controlClassName={styles.input_drop_control}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Employee Band:</label>
            <Dropdown
              options={bands}
              value="Select Band"
              onChange={(selectedOption) =>
                handleBandDropdownChange(selectedOption)
              }
              controlClassName={styles.input_drop_control}
              placeholder="Select an option"
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Total Experience:</label>
            <input
              type="number"
              className={styles.input_box}
              name="total_experience"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Experion Experion:</label>
            <input
              type="number"
              name="experion_experience"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={styles.input_box}
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Skills:</label>
            <textarea
              name="employee_skills"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={`${styles.input_box} ${styles.non_resizable_textarea}`}
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Upskilling Suggestions:</label>
            <textarea
              name="upskilling_suggestions"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={`${styles.input_box} ${styles.non_resizable_textarea}`}
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Areas of Strengths:</label>
            <textarea
              name="strengths"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={`${styles.input_box} ${styles.non_resizable_textarea}`}
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Reason for Release:</label>
            <textarea
              name="releaseReason"
              onChange={(e) => {
                handleInputChange(e);
              }}
              className={`${styles.input_box} ${styles.non_resizable_textarea}`}
            />
          </div>
          <div className={styles.single_transfer_detail}>
            <label className={styles.form_label}>Remarks:</label>
            <textarea
              className={`${styles.input_box} ${styles.non_resizable_textarea}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.submit_area}>
        <div>
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            inputProps={{ "aria-label": "controlled" }}
            size="small"
          />
          <label htmlFor="checkbox">Project Access Revoked</label>
        </div>
        <Button
          variant="outlined"
          color="error"
          type="submit"
          disabled={!isChecked}
          size="small"
        >
          Submit
        </Button>
      </div>
    </form>
    </>
  );
};

export default InitiateTransferForm;
