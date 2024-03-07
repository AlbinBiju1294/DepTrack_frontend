export type dataSourceType = {
    id: number
    currentdu: {
        du_name: string
    }
    employee:  {
        employee_number: string,
        name: string,
        id: number
    }
    initiated_by:  {
        employee_number: string,
        name: string,
        id: number
    }
    status: string
    targetdu: {
        du_name: string
    }
    transfer_date: string
}

export type PendingApprovalsTablePropsType = (dataSource: dataSourceType[]) => void
     