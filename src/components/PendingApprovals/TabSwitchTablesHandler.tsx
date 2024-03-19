import { useContext, useEffect, useState } from 'react'
import { fetchData } from './api/fetchData';
import UserContext from '../Contexts/UserContextProvider';
import {dataSourceType} from '../../components/PendingApprovalsTable/types/index'
import TabSwitchTables from './TabSwitchTables';

const TabSwitchTablesHandler = () => {
    const [activeButton, setActiveButton] = useState<number>(1);
    const { user } = useContext(UserContext);
    const [dataSource, setDataSource] = useState<dataSourceType[]>([])

    const du_id = user?.du_id;
  
    useEffect(() => {
        setDataSource([])
        fetchData(du_id, activeButton,setDataSource)
      }, [activeButton]);

  return (
    <div>
      <TabSwitchTables setActiveButton={setActiveButton} activeButton={activeButton} dataSource={dataSource}></TabSwitchTables>
    </div>
  )
}

export default TabSwitchTablesHandler
