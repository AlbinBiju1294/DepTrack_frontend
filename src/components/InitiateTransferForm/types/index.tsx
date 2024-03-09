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
