import type { TableColumnsType } from "antd";
import { LegacyRef, RefObject } from "react";
import ReactDropdown from "react-dropdown";
import { Option } from "react-dropdown";

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

export type FormDataType = {
  du_name?: string;
  du_head_id?: number;
  hrbp_id?: number;
};

export type ChangeFormDataType = {
  du_head_id?: number;
  du_id?:number;
};

export type duHeadsAndHrbpCandidatesType = {
  employee_id: number;
  name: string;
};

export type AdminTableSetDataType = (dataSource: adminDataSourceType[]) => void;
export type SetDuCandidatesType = (
  duHeadsCandidates: duHeadsAndHrbpCandidatesType[]
) => void;

export type SetHrbpCandidatesType = (
  HrbpCandidates: duHeadsAndHrbpCandidatesType[]
) => void;

export type AdminTablePropsType = {
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  adminDataSource: adminDataSourceType[];
  columns: TableColumnsType<adminDataSourceType>;
  current: number;
  open: boolean;
  pageSize: number;
  duHeadOptions: string[];
  hrbpOptions: string[];
  duNameInputboxRef: RefObject<HTMLInputElement>;
  duHeadInputRef: LegacyRef<ReactDropdown>;
  changeDuHeadInputRef:LegacyRef<ReactDropdown>;
  duHrbpInputRef: LegacyRef<ReactDropdown>;
  addDu: () => void;
  handleSelectDuHead: (selectedOption: Option) => void;
  handleSelectDuName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectHrbp: (selectedOption: Option) => void;
  handleCloseAddDu: () => void;
  onSubmit: () => Promise<void>;
  onChangeDuHeadSubmit: () => Promise<void>;
  total: number | undefined;
  onShowSizeChange: (current: number, size: number) => void;
  onChange: (page: number) => void;
  pageSizeOptions: string[];
  changeOpen:boolean;
  handleCloseChangeDuHead: () => void;
  handleChangeDuHeadSelection:(selectedOption: Option) => void
};
