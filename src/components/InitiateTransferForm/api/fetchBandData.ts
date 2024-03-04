import axiosInstance from "../../../config/AxiosConfig";
import { SetBandDataFunction } from "../types";

export const fetchBandData = async (setBands:SetBandDataFunction) => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/employee/bands/`
      );
      console.log("Response from API - bands:", res.data.band_levels);
      setBands(res.data.band_levels);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };