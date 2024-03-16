import styles from "./ManageDuContainer.module.css";
import AdminTableHandler from "../AdminTable/AdminTableHandler";


const ManageDuContainer = () => {
  return (
    <div className={styles.inner_container}>
      <AdminTableHandler />
    </div>
  );
};

export default ManageDuContainer;
