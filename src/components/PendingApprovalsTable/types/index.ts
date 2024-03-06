

export type dataSourceType = {
    id: number
    currentdu: string
    employee:  {
        number: string,
        name: string,
        id: number
    }
 
    status: string
    targetdu: string

}

export type PendingApprovalsTablePropsType = (dataSource: dataSourceType[]) => void
     