import axios, { AxiosRequestConfig } from "axios"; 
import { SetEmployeeDataFunction } from "../types";
import axiosInstance from "../../../config/AxiosConfig";
import { Employee } from "../types";



export const fetchEmployeeData = async (searchKeyword:string,setEmployeeData:SetEmployeeDataFunction,employee_id:number | undefined) => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/employee/search-employee/?name=${searchKeyword}`
      );
      console.log("Response from API - employees searched:", res.data.data);
      const newEmployeeData = res.data.data.filter((employee: Employee) => employee.id != employee_id)
      setEmployeeData(newEmployeeData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };