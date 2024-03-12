import React from "react";
import styles from "./TransferHistroyContainer.module.css";
import FilterComponent from "../FilterComponent/FilterComponent";

const TransferHistroyContainer = () => {
  return (
    <div className={styles.inner_container}>
      <FilterComponent />
    </div>
  );
};

export default TransferHistroyContainer;
