import React from "react";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import styles from "../PagesCommonCss.module.css";
import ManageDuContainer from "../../components/ManageDuContainer/ManageDuContainer";

const Admin = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Manage Du" />
        <ManageDuContainer />
      </div>
    </>
  );
};

export default Admin;
