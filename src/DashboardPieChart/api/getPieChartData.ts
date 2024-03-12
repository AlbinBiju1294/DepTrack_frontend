import axiosInstance from "../../config/AxiosConfig"
import { pieChartDataType } from "../types";

export const getPieChartData = async (setPieChartData: React.Dispatch<React.SetStateAction<pieChartDataType[]>>) => {
    try {
        const response = await axiosInstance.get("/api/v1/employee/get-du-employees/");
        console.log(response.data.data);
        setPieChartData(response.data.data);
    }
    catch(error) {
        console.log(error);
        
    }
}