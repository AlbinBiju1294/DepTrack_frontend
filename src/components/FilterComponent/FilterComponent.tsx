import React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from "./FilterComponent.module.css";

const FilterComponent = () => {
  const options = [
    { label: "DU1", id: 1 },
    { label: "DU2", id: 2 },
  ];

  return (
    <div className={styles.whole}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{
          width: 100,
          size: "small",
        }}
        renderInput={(params) => <TextField {...params} label="DU" />}
      />
    </div>
  );
};

export default FilterComponent;
