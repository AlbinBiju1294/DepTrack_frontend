import { Option } from "react-dropdown";

export interface Employee {
  id: number;
  employee_number: string;
  name: string;
  mail_id: string;
  designation: string;
}

export interface Du {
  id: number;
  du_name: string;
}

export interface FormDataType {
  currentdu_id?: number;
  employee_band?: string;
  employee_id?: number | null;
  employee_skills?: string;
  experion_experience?: string;
  releaseReason?: string;
  status?: number;
  strengths?: string;
  targetdu_id?: number;
  total_experience?: string;
  transfer_date?: string;
  upskilling_suggestions?: string;
}


export type SetEmployeeDataFunction = (data: Employee[]) => void;

export type SetDuDataFunction = (data: Du[]) => void;

export type SetBandDataFunction = (data: string[]) => void;

export interface InitiateTransferFormPropsType {
  employeeData:Employee[];
  selectedEmployee:Employee | null;
  bands:bandDataType[];
  isChecked:boolean;
  contextHolder:React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  options:optionType[],
  changeKeyword:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAutocompleteChange:(selectedValue: Employee | null) => void;
  handleBandDropdownChange:(selectedOption: string | undefined) => void;
  handleDuDropdownChange:(selectedOption: Du | undefined) => void;
  handleCheckboxChange:() => void;
  loading:boolean;
}

export interface optionType{
  value:Du;
  label:string;
}

export interface bandDataType{
  value:string;
  label:string;
}
