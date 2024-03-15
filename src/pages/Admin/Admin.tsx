import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import styles from "../PagesCommonCss.module.css";
import styles2 from "./Admin.module.css";
import ManageDuContainer from "../../components/ManageDuContainer/ManageDuContainer";
import AddEmployeeContainer from "../../components/AddEmployeeContainer/AddEmployeeContainer";
import { useState } from "react";

const Admin = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  const HandleClick = (button: number) => {
    if (button === 1) {
      setActiveButton(1);
    } else {
      setActiveButton(2);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Manage Du" />
        <div className={styles2.tabswitch}>
          <button
            type="button"
            onClick={() => HandleClick(1)}
            className={`${
              activeButton === 1
                ? `${styles2.activeBtn} ${styles2.tabs}`
                : `${styles2.inactiveBtn} ${styles2.tabs}`
            }`}
          >
            Manage DU
          </button>
          <button
            type="button"
            onClick={() => HandleClick(2)}
            className={`${
              activeButton === 2
                ? `${styles2.activeBtn} ${styles2.tabs}`
                : `${styles2.inactiveBtn} ${styles2.tabs}`
            }`}
          >
            Add Employee
          </button>
        </div>
        {activeButton === 1 ? <ManageDuContainer /> : <AddEmployeeContainer />}
      </div>
    </>
  );
};

export default Admin;
