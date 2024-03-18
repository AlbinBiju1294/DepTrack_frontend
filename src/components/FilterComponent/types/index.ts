

export interface Du {
  id: number;
  du_name: string;
}


export type dataSourceType = {
  currentdu: {
    du_name: string;
  };
  employee: {
    employee_number: string;
    name: string;
    id: number;
  };
  id: number;
  status: string;
  targetdu: {
    du_name: string;
  };
  transfer_date: string;
  
};

export type paginationtype = {
  current: number;
  total: number;
  pageSize: number;
};