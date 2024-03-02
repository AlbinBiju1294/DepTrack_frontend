import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import InnerBody from "../../components/InnerBody/InnerBody";
import styles from "./InitiateTransfer.module.css";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import InitiateTransferContainer from "../../components/InitiateTransferContainer/InitiateTransferContainer";

const InitiateTransfer = () => {
  const storedUser = localStorage.getItem("user");
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Initiate Transfer" />
        <InitiateTransferContainer />
      </div>
    </>
  );
};

export default InitiateTransfer;
