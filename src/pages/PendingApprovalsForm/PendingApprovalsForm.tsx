import React from "react";
import styles from "./PendingApprovalsForm.module.css";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import PendingApprovalsFormContainer from "../../components/PendingapprovalsFormContainer/PendingApprovalFormContainer";

const PendingApprovalsForm = () => {
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="PendingApprovals" />
        <PendingApprovalsFormContainer />
        
      </div>
    </>
  );
};

export default PendingApprovalsForm;