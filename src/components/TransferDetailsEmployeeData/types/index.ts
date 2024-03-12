export interface EmployeeDataProps {
  id: number;
  details: {
    id: number;
    employee_band: string;
    total_experience: number;
    experion_experience: number;
    employee_skills: string;
    upskilling_suggestions: string; 
    strengths: string; 
    areas_of_improvement: string; 
    additional_training_needs: string; 
    releaseReason: string|null; 
    transfer_id: number;
  }
  employee: {
      id: number;
      employee_number: string;
      name: string;
      mail_id: string;
      designation: string;
      profile_pic_path: string | null;
      created_at: string; 
      updated_at: string; 
      du_id: number;
  };

  currentdu: {
    du_name: string;
};
targetdu:{
  du_name:string
}
initiated_by: {
    id: number;
    employee_number: string;
    name: string;
},
  status: number;
  rejection_reason: string;
  transfer_date: string; 
  employee_id: number;
  currentdu_id: number;
  targetdu_id: number;
  newpm_id: number;
   
};

  