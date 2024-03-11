import type { TableColumnsType } from "antd";

export type adminDataSourceType = {
  du: {
    id: number;
    du_name: string;
  };
  du_head: {
    id: number;
    employee_number: string;
    name: string;
  };
};

export type AdminTableSetDataType = (dataSource: adminDataSourceType[]) => void;

export type AdminTablePropsType = {
  adminDataSource: adminDataSourceType[] | undefined;
  columns: TableColumnsType<adminDataSourceType>;
};
