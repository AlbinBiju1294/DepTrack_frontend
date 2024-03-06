import React from "react";
import styles from "./TransferHistroyContainer.module.css";
import FilterComponent from "../FilterComponent/FilterComponent";
import TransferHistoryTableHandler from "../TransferHistorytable/TransferHistoryTableHandler";

const TransferHistroyContainer = () => {
  return (
    <div className={styles.inner_container}>
      <FilterComponent />
      <TransferHistoryTableHandler></TransferHistoryTableHandler>
    </div>
  );
};

export default TransferHistroyContainer;
