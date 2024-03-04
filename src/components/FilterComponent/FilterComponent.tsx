import React from "react";
import axios from "axios";
import styles from "./FilterComponent.module.css";
import { Button } from "@mui/material";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useRef, useState, useEffect } from "react";
import { FormData, Du } from "./types/index";
import ReactDropdown from "react-dropdown";

const FilterComponent = () => {
  const status = ["Completed", "Cancelled", "Rejected"];
  const [duData, setDuData] = useState<Du[]>([]);
  const statusRef = useRef<ReactDropdown>(null);
  const transferDateFromRef = useRef<HTMLInputElement>(null);
  const transferDateToRef = useRef<HTMLInputElement>(null);
  const employeeNameRef = useRef<HTMLInputElement>(null);
  const employeeNumberRef = useRef<HTMLInputElement>(null);

  const options = duData.map((du) => {
    return du.du_name;
  });

  const token = localStorage.getItem("access_token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fromRef = useRef<ReactDropdown>(null);
  const toRef = useRef<ReactDropdown>(null);

  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    status: "",
    transferDateFrom: "",
    transferDateTo: "",
    employeeName: "",
    employeeNumber: "",
  });

  const handleDuDropdownChange = (
    selectedOption: Option,
    fieldToUpdate: string
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldToUpdate]: selectedOption.value,
    }));
  };
  console.log(formData);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormData({
      from: "",
      to: "",
      status: "",
      transferDateFrom: "",
      transferDateTo: "",
      employeeName: "",
      employeeNumber: "",
    });

    if (transferDateFromRef.current) transferDateFromRef.current.value = "";
    if (transferDateToRef.current) transferDateToRef.current.value = "";
    if (employeeNameRef.current) employeeNameRef.current.value = "";
    if (employeeNumberRef.current) employeeNumberRef.current.value = "";
  };

  useEffect(() => {
    const fetchDuData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/v1/delivery-unit/list-delivery-units/",
          config
        );
        console.log("Response from API - du's got:", res.data.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDuData();
  }, []);

  return (
    <>
      <div>
        <div className={styles.first_row}>
          <Dropdown
            options={options}
            value="From"
            ref={fromRef}
            onChange={(selectedOption) =>
              handleDuDropdownChange(selectedOption, "from")
            }
            className={styles.dropdown}
            controlClassName={styles.input_drop_control}
          />

          <Dropdown
            options={options}
            value="To"
            onChange={(selectedOption) =>
              handleDuDropdownChange(selectedOption, "to")
            }
            className={styles.dropdown}
            controlClassName={styles.input_drop_control}
          />
          <Dropdown
            options={status}
            value="status"
            onChange={(selectedOption) =>
              handleDuDropdownChange(selectedOption, "status")
            }
            className={styles.dropdown}
            controlClassName={styles.input_drop_control}
          />
          <input
            type="date"
            name="transfer_date"
            onChange={(e) => handleChange("transferDateFrom", e.target.value)}
            ref={transferDateFromRef}
            className={styles.input_box}
          />
          <div>---&gt;</div>
          <input
            type="date"
            name="transfer_date"
            onChange={(e) => handleChange("transferDateTo", e.target.value)}
            className={styles.input_box}
          />
        </div>
        <div className={styles.second_row}>
          <input
            type="text"
            name="employee_name"
            placeholder="Employee Name"
            onChange={(e) => handleChange("employeeName", e.target.value)}
            className={styles.input_box}
          />
          <input
            type="text"
            name="employee_number"
            onChange={(e) => handleChange("employeeNumber", e.target.value)}
            placeholder="Employee Number"
            className={styles.input_box}
          />
          <Button
            disableRipple={true}
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            sx={{
              marginRight: "5px",
            }}
            className={styles.button}
          >
            Search
          </Button>
          <Button
            disableRipple={true}
            variant="outlined"
            color="primary"
            onClick={handleClear}
            type="submit"
            size="small"
          >
            Clear
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
