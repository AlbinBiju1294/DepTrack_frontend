import axios, { AxiosRequestConfig } from "axios"; 
import { SetEmployeeDataFunction } from "../types";
import axiosInstance from "../../../config/AxiosConfig";



export const fetchEmployeeData = async (searchKeyword:string,setEmployeeData:SetEmployeeDataFunction) => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/employee/search-employee/?name=${searchKeyword}`
      );
      console.log("Response from API - employees searched:", res.data.data);
      setEmployeeData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };