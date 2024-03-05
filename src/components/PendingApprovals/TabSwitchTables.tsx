import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import styles from "../PendingApprovals/TabSwitchTables.module.css"
import UserContext from '../Contexts/UserContextProvider';

const TabSwitchTables = () => {

    const [activeButton, setActiveButton] = useState<number>(1);
    const { user } = useContext(UserContext);

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
    </div>
  )
}

export default TabSwitchTables
