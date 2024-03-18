import React from 'react'
import axiosInstance from '../../../config/AxiosConfig';

//api call for fetching bar graph data(du's and no of transfers)
export const fetchBarGraphData = async (setDuData:React.Dispatch<React.SetStateAction<{
    du_name: string;
    no_of_transfers: number;
    }[]>>) => {
  try{
    const res = await axiosInstance.get('http://127.0.0.1:8000/api/v1/transfer/bargraph-data/');
    setDuData(res.data.data);
  }
  catch(error){
    console.error('Error fetching data:', error);
  }
}