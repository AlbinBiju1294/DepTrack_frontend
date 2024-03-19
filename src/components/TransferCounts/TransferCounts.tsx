import React, { useEffect, useState } from "react";
import styles from "./TransferCounts.module.css";
import { TransferCountsProps, TransferCountData } from "./types";


const TransferCounts: React.FC<TransferCountsProps> = ({ transferStatus, transferCount }) => {
  
  return (
    <div className={styles.transferCountDiv}>
      <p>
        Transfers {transferStatus} : {transferCount[`Transfer ${transferStatus}`]}
      </p>
    </div>
  );
};

export default TransferCounts;
