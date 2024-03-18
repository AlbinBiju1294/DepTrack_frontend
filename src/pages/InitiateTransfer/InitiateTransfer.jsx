import styles from "./InitiateTransfer.module.css";
import InnerBodyHeader from "../../components/InnerBodyHeader/InnerBodyHeader";
import InitiateTransferContainer from "../../components/InitiateTransferContainer/InitiateTransferContainer";

const InitiateTransfer = () => {
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
