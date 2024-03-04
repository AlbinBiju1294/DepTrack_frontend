import React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from "./FilterComponent.module.css";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FilterComponent = () => {
  const options = [
    { label: "DU1", id: 1 },
    { label: "DU2", id: 2 },
  ];

  return (
    <>
      <div className={styles.whole}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
          <div style={{ width: "170px", height: "20px" }}>
            <DatePicker slotProps={{ textField: { size: "small" } }} />
          </div>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default FilterComponent;
