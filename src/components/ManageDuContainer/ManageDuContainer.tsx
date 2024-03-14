import React from "react";
import styles from "./ManageDuContainer.module.css";
import AdminTableHandler from "../AdminTable/AdminTableHandler";
import AddDuAndEmployeeButton from "../AddDu&EmployeeButton/AddDuAndEmployeeButton";
import AdminTabSwitch from "../AdminTabSwitch/AdminTabSwitch";
const ManageDuContainer = () => {
  return (
    <div className={styles.inner_container}>
      <AdminTabSwitch />
      <AddDuAndEmployeeButton />
      <AdminTableHandler />
    </div>
  );
};

export default ManageDuContainer;
