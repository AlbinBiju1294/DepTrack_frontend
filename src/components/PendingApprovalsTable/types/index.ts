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
    status: string
    targetdu: string

}

export type PendingApprovalsTablePropsType = { 
    dataSource: dataSourceType[], 
    pagination: PaginationProps, 
    handlePaginationChange: HandlePaginationChangeType}