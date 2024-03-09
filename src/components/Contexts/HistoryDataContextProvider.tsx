import React, { useState, createContext, ReactNode } from "react";

export type dataType = {
  currentdu: string;
  employee: {
    number: string;
    name: string;
    id: number;
  };
  id: number;
  status: number;
  targetdu: string;
  transfer_date: string;
};

export type paginationtype ={
    current:number;
    total:number;
    pageSize:number;
}

type HistoryDataContextType = {
  dataSource: dataType[];
  setDataSource: React.Dispatch<React.SetStateAction<dataType[]>>;
  pagination:paginationtype;
  setPagination:React.Dispatch<React.SetStateAction<paginationtype>>;
};

const initialHistoryData = {
  dataSource: [],
  setDataSource: () => [],
  pagination: {
    current: 1,
    total: 0,
    pageSize: 5,
  },
  setPagination: () => {},
};

const HistoryDataContext =
  createContext<HistoryDataContextType>(initialHistoryData);

export const HistoryDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dataSource, setDataSource] = useState<dataType[]>([]);
  const [pagination, setPagination] = useState<paginationtype>(initialHistoryData.pagination);

  return (
    <HistoryDataContext.Provider value={{ dataSource, setDataSource,pagination,setPagination }}>
      {children}
    </HistoryDataContext.Provider>
  );
};

export default HistoryDataContext;
