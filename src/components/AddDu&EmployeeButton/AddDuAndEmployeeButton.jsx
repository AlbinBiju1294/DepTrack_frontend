import styles from "./AddDuAndEmployeeButton.module.css";

const AddDuAndEmployeeButton = () => {
  

  return (
    <div>
      <div className={styles.uploadfile_whole}>
        
          <input type="file" className={styles.upload} />
          <button className={styles.button} type="button">
            <p style={{ color: "#FFFF" }}>{"Add Employees"}</p>
          </button>
      
        <button className={styles.button} type="button">
          <p style={{ color: "#FFFF" }}>{"Add DU"}</p>
        </button>
      </div>
    </div>
  );
};

export default AddDuAndEmployeeButton;
