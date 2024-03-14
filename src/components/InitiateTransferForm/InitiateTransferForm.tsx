import styles from "./InitiateTransferForm.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Initiate.css";
import "react-dropdown/style.css";
import { Button, Checkbox } from "@mui/material";
import { Employee, InitiateTransferFormPropsType } from "./types";
import Select from "react-select";

const getCurrentDate = () => {
  const today = new Date();
  let day = today.getDate();
  console.log(day)
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  let newday;
  let newmonth;

  if (day < 10) {
    newday = '0' + day.toString();
  }
  else{
    newday = day.toString();
  }
  if (month < 10) {
    newmonth = '0' + month.toString();
  }

  return `${year}-${newmonth}-${newday}`;
}

//component for displaying the form for employee transfer initiation
const InitiateTransferForm = ({
  employeeData,
  selectedEmployee,
  bands,
  isChecked,
  contextHolder,
  options,
  changeKeyword,
  handleSubmit,
  handleInputChange,
  handleAutocompleteChange,
  handleBandDropdownChange,
  handleDuDropdownChange,
  handleCheckboxChange,
}: InitiateTransferFormPropsType) => {

let currentDate = getCurrentDate()

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_row}>
            <div
              className={`${styles.single_transfer_detail} ${styles.emp_name}`}
            >
              <label className={styles.form_label}>Employee Name:*</label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                aria-required
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
                    required
                  />
                )}
              />
            </div>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Employee Number:*</label>
              <input
                type="text"
                value={selectedEmployee ? selectedEmployee.employee_number : ""}
                className={styles.input_box}
              />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Transfer Date:*</label>
              <input
                required
                type="date"
                name="transfer_date"
                min={currentDate}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.input_box}
              />
            </div>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Target DU:*</label>
              <Select
                options={options}
                placeholder="Select Target Du"
                required
                onChange={(selectedOption) => {
                  handleDuDropdownChange(selectedOption?.value);
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: 250,
                    minHeight: "10px",
                    maxHeight: "28px",
                    fontSize: "11px",
                    borderRadius: "3px",
                    border: state.isFocused ? "none" : "none",
                    outline: state.isFocused
                      ? "1px solid blue"
                      : "1px solid #7D7D7D",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "none",
                    },
                  }),
                  indicatorSeparator: (provided) => ({
                    ...provided,
                    display: "none",
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    minHeight: "25px",
                    maxHeight: "30px",
                    marginTop: "-8px",
                    width: "30px",
                    color: "grey",
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    fontSize: 10,
                    width: 250,
                    height: 120,
                    overflowY: "scroll",
                  }),
                  option: (provided) => ({
                    ...provided,
                    fontSize: 10,
                  }),
                }}
              />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Employee Band:*</label>
              <Select
                options={bands}
                placeholder="Select Employee Band"
                required
                onChange={(selectedOption) => {
                  handleBandDropdownChange(selectedOption?.value);
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: 250,
                    minHeight: "10px",
                    maxHeight: "28px",
                    fontSize: "11px",
                    borderRadius: "3px",
                    border: state.isFocused ? "none" : "none",
                    outline: state.isFocused
                      ? "1px solid blue"
                      : "1px solid #7D7D7D",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "none",
                    },
                  }),
                  indicatorSeparator: (provided) => ({
                    ...provided,
                    display: "none",
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    minHeight: "10px",
                    maxHeight: "28px",
                    marginTop: "-8px",
                    width: "30px",
                    color: "grey",
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    fontSize: 10,
                    width: 250,
                    height: 120,
                    overflowY: "scroll",
                  }),
                  option: (provided) => ({
                    ...provided,
                    fontSize: 10,
                  }),
                }}
              />
            </div>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Total Experience:*</label>
              <input
                required
                type="number"
                min={0}
                max={25}
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
              <label className={styles.form_label}>Experion Experience:*</label>
              <input
                required
                type="number"
                min={0}
                max={25}
                name="experion_experience"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={styles.input_box}
              />
            </div>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Skills:*</label>
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
              <label className={styles.form_label}>
                Upskilling Suggestions:*
              </label>
              <textarea
                name="upskilling_suggestions"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className={`${styles.input_box} ${styles.non_resizable_textarea}`}
              />
            </div>
            <div className={styles.single_transfer_detail}>
              <label className={styles.form_label}>Areas of Strengths:*</label>
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
              <label className={styles.form_label}>Reason for Release:*</label>
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
