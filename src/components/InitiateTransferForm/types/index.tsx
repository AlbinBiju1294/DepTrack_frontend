export interface Employee {
  id: number;
  employee_number: string;
  name: string;
  mail_id: string;
  designation: string;
  // Define other properties if available
}

export interface Du {
  id: number;
  du_name: string;
}

export type SetEmployeeDataFunction = (data: Employee[]) => void;

export type SetDuDataFunction = (data: Du[]) => void;

export type SetBandDataFunction = (data: string[]) => void;
