import styles from './PendingApprovals.module.css'
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader';
import PendingApprovalsContainer from '../../components/PendingApprovalsContainer/PendingApprovalsContainer';

const PendingApprovals = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Pending Approvals" />
        <PendingApprovalsContainer></PendingApprovalsContainer>
      </div>
    </>
  );
}

export default PendingApprovals
