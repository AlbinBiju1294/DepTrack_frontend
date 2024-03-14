import { useState } from "react";
import styles from "./AdminTabSwitch.module.css";

const AdminTabSwitch = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  return (
    <div>
      <button
        type="button"
        onClick={() => setActiveButton(1)}
        className={`${
          activeButton === 1
            ? `${styles.activeBtn} ${styles.tabs}`
            : `${styles.inactiveBtn} ${styles.tabs}`
        }`}
      >
        Manage DU
      </button>
      <button
        type="button"
        onClick={() => setActiveButton(2)}
        className={`${
          activeButton === 2
            ? `${styles.activeBtn} ${styles.tabs}`
            : `${styles.inactiveBtn} ${styles.tabs}`
        }`}
      >
        Add Employee
      </button>
    </div>
  );
};

export default AdminTabSwitch;
