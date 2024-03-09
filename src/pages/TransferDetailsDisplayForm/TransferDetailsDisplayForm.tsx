import React from "react";
import styles from "./TransferDetailsDisplayForm.module.css";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import TransferDetailsdisplayContainer from "../../components/TransferDetailsDisplayContainer/TransferDetailsDisplayContainer";

const TransferDetailsDisplayForm= () => {
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="PendingApprovals" />
        <TransferDetailsdisplayContainer />
        
      </div>
    </>
  );
};

export default TransferDetailsDisplayForm;