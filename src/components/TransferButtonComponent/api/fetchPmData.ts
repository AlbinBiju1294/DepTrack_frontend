import axiosInstance from "../../../config/AxiosConfig";
import { fetchPmDataFunctionType } from "../types";

export const fetchPmData = async (setPmData: fetchPmDataFunctionType) => {
    try {
      const res = await axiosInstance.get(
        "/api/v1/employee/pm-list/"
      );
      console.log("Response from API - pm's got:", res.data.data);
      setPmData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };