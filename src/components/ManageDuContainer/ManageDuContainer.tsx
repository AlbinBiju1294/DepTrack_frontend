import React from "react";
import styles from "./ManageDuContainer.module.css";
import AdminTableHandler from "../AdminTable/AdminTableHandler";
import AddDuAndEmployeeButton from "../AddDu&EmployeeButton/AddDuAndEmployeeButton";

const ManageDuContainer = () => {
  return (
    <div className={styles.inner_container}>
      <AddDuAndEmployeeButton />

      <AdminTableHandler />
    </div>
  );
};

export default ManageDuContainer;
