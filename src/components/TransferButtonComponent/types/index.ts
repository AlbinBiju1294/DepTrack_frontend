import { Option } from "react-dropdown";
import { User } from "../../Contexts/UserContextProvider";

export type pmDataType = {
    employee_details: {
      id: number;
      employee_number: string;
      name: string;
    };
  }

  export type datePmPostDataType = {
    transfer_id?: number;
    transfer_date?: string;
    newpm_id?: number;
  }

export type fetchPmDataFunctionType = (data: pmDataType[]) => void

export type TransferButtonComponentPropsType = {
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  showModal: () => void;
  open: boolean;
  handleOk: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
  handleCloseApproval: () => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pmOptions: string[];
  handleSelectPm: (selectedOption: Option) => void;
  transferDate: string;
  currentDuNumber: number;
  handleOpenReject: () => void;
  openReject: boolean;
  handleCloseReject: () => void;
  isReasonEntered: boolean;
  handleRejectConfirm: () => Promise<void>;
  success: () => void;
  reason: string;
  handleReasonChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  user : User | null;
}