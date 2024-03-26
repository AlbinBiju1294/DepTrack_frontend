import { dataSourceType } from "../../PendingApprovalsTable/types";

export type TabSwitchTablesPropsType = {
    setActiveButton: React.Dispatch<React.SetStateAction<number>>;
    activeButton: number;
    dataSource: dataSourceType[];
}