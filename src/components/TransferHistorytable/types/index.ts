import { PaginationProps } from "antd";

export type HandlePaginationChangeType = (newPagination: PaginationProps) => void;

export type dataSourceType = {
    currentdu: string
    employee:  {
        number: string,
        name: string,
        id: number
    }
    id: number
    status: number
    targetdu: string
    transfer_date: string
}

export type TransferHistoryTablePropsType = { 
    dataSource: dataSourceType[], 
    pagination: PaginationProps, 
    handlePaginationChange: HandlePaginationChangeType}