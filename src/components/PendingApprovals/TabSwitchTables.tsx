import styles from "../PendingApprovals/TabSwitchTables.module.css"
import PendingApprovalsTable from '../../components/PendingApprovalsTable/PendingApprovalsTable';
import { TabSwitchTablesPropsType } from "./types";

// Gives two tab switch options to see all the incoming(from other DUs) and outgoing(from PMs) transfer requests.

const TabSwitchTables = ({setActiveButton, activeButton, dataSource}: TabSwitchTablesPropsType) => {

  return (
    <div>
      <button type='button' onClick={() => setActiveButton(1)} className={`${activeButton === 1 ?
                                            `${styles.activeBtn} ${styles.tabs}`
                                            :`${styles.inactiveBtn} ${styles.tabs}`
                                            }`} >
        Incoming
      </button>
      <button type='button' onClick={() => setActiveButton(2)} className={`${activeButton === 2 ?
                                            `${styles.activeBtn} ${styles.tabs}`
                                            :`${styles.inactiveBtn} ${styles.tabs}`
                                            }`} >
        Outgoing
      </button>
      <PendingApprovalsTable dataSource={dataSource} ></PendingApprovalsTable>
    </div>
  )
}

export default TabSwitchTables
