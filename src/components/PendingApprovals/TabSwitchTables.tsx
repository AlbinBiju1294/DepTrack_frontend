import React, { useContext, useEffect, useState } from 'react'
import styles from "../PendingApprovals/TabSwitchTables.module.css"
import { fetchData } from './api/fetchData';
import UserContext from '../Contexts/UserContextProvider';
import PendingApprovalsTable from '../../components/PendingApprovalsTable/PendingApprovalsTable';
import {dataSourceType} from '../../components/PendingApprovalsTable/types/index'



const TabSwitchTables = ({}) => {

    const [activeButton, setActiveButton] = useState<number>(1);
    const { user } = useContext(UserContext);
    const [dataSource, setDataSource] = useState<dataSourceType[]>([])

    const du_id = user?.du_id;
  
    useEffect(() => {
        fetchData(du_id, activeButton,setDataSource)
      }, [activeButton]);

  return (
    <div>
      <button type='button' onClick={() => setActiveButton(1)} className={`${activeButton === 1 ?
                                            `${styles.activeBtn} ${styles.tabs}`
                                            :`${styles.inactiveBtn} ${styles.tabs}`
                                            }`} >
        External
      </button>
      <button type='button' onClick={() => setActiveButton(2)} className={`${activeButton === 2 ?
                                            `${styles.activeBtn} ${styles.tabs}`
                                            :`${styles.inactiveBtn} ${styles.tabs}`
                                            }`} >
        Internal
      </button>
      <PendingApprovalsTable dataSource={dataSource} ></PendingApprovalsTable>
    </div>
  )
}

export default TabSwitchTables
