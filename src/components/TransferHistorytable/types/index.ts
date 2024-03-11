import { PaginationProps } from "antd";

export type HandlePaginationChangeType = (
  newPagination: PaginationProps
) => void;

export type dataSourceType = {
  currentdu: {
    du_name: string;
  };
  employee: {
    number: string;
    name: string;
    id: number;
  };
  id: number;
  status: string;
  targetdu: {
  du_name: string;
  };
  transfer_date: string;
};

export type TransferHistoryTablePropsType = { 
    dataSource: dataSourceType[], 
    pagination: PaginationProps, 
    handlePaginationChange: HandlePaginationChangeType
}