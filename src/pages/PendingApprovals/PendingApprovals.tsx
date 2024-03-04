import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import InnerBody from "../../components/InnerBody/InnerBody";
import styles from "./PendingApprovals.module.css";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import PendingApprovalsContainer from '../../components/PendingApprovalsContainer/PendingApprovalsContainer'


const PendingApprovals = () => {
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="PendingApprovals" />
        <PendingApprovalsContainer />
        
      </div>
    </>
  );
};

export default PendingApprovals;
