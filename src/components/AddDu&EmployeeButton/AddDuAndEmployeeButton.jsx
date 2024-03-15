import styles from "./AddDuAndEmployeeButton.module.css";

const AddDuAndEmployeeButton = () => {
  return (
    <div>
      <div className={styles.uploadfile_whole}>
        <button className={styles.button} type="button">
          <p style={{ color: "#FFFF" }}>{"Add DU"}</p>
        </button>
      </div>
    </div>
  );
};

export default AddDuAndEmployeeButton;
