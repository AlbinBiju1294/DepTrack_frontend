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
  adminDataSource: adminDataSourceType[];
  columns: TableColumnsType<adminDataSourceType>;
  current: number;
  open:boolean;
  pageSize: number;
  total: number | undefined;
  onShowSizeChange: (current: number, size: number) => void;
  onChange: (page: number) => void;
  pageSizeOptions: string[];
};
