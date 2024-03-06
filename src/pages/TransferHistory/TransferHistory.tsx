import React from 'react'
import styles from './TransferHistory.module.css'
import TransferHistroyContainer from '../../components/TransferHistoryContainer/TransferHistroyContainer';
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader';
import {HistoryDataContextProvider} from '../../components/Contexts/HistoryDataContextProvider';

const TransferHistory = () => {
  return (
    <HistoryDataContextProvider>
      <div className={styles.main}>
        <InnerBodyHeader heading="Transfer History" />
        <TransferHistroyContainer/>
      </div>
    </HistoryDataContextProvider>
  );
}

export default TransferHistory
