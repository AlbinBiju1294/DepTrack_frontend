import React, { useState, createContext, ReactNode } from "react";

export type dataType = {
    currentdu: string;
    employee:  {
        number: string,
        name: string,
        id: number
    };
    id: number;
    status: number;
    targetdu: string;
    transfer_date: string;
}

type HistoryDataContextType = {
    dataSource: dataType[] | null;
    setDataSource: React.Dispatch<React.SetStateAction<dataType[] | null>>
}

const initialHistoryData = {
    dataSource: [],
    setDataSource: () => null
}

const HistoryDataContext = createContext<HistoryDataContextType>(initialHistoryData);


export const HistoryDataContextProvider = ({ children }: { children: ReactNode }) => {
    const [dataSource, setDataSource] = useState<dataType[] | null>([]);

    return (
        <HistoryDataContext.Provider value={{ dataSource, setDataSource }}>
            {children}
        </HistoryDataContext.Provider>
    );
}

export default HistoryDataContext;
