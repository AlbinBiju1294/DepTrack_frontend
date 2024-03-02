import React from 'react'
import styles from './TransferHistory.module.css'
import TransferHistroyContainer from '../../components/TransferHistoryContainer/TransferHistroyContainer';
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader';

const TransferHistory = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Transfer History" />
        <TransferHistroyContainer/>
      </div>
    </>
  );
}

export default TransferHistory
