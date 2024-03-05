import React from 'react'
import styles from './PendingApprovals1.module.css'
import PendingApprovalsTableContainer from '../../components/PendingApprovalsTableContainer/PendingApprovalsTableContainer';
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader';

const PendingApprovals1 = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Pending Approval" />
        <PendingApprovalsTableContainer/>
      </div>
    </>
  );
}

export default PendingApprovals1
