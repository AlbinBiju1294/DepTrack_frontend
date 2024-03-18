import { ColumnsType } from "antd/es/table";
export interface Employee {
    designation: string;
    employee_number: string;
    id: number;
    mail_id: string;
    name: string;
  }
  
export interface DuName {
    du_name: string;
  }
  
export interface TransferDetailsType {
    currentdu: DuName;
    employee: Employee;
    id: number;
    initiated_by: Employee;
    status: string;
    targetdu: DuName;
    transfer_date: string;
  }

  export interface TrackRequestsContainerPropsType {
    contextHolder:React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    columns:ColumnsType<TransferDetailsType>;
    currentItems:TransferDetailsType[];
    currentPage:number;
    pageSize:number;
    totalItems:number;
    handlePageSizeChange:(current: number, size: number) => void;
    handlePageChange:(page: number) => void;
    pageSizeOptions:string[];
    open:boolean;
    handleOk:() => void;
    handleCancel:() => void;
    selectedTransfer:TransferDetailsType | undefined; 
    cancelRequest:() => Promise<void>
}