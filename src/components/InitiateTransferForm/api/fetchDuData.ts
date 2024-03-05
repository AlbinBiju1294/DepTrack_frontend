import axiosInstance from "../../../config/AxiosConfig";
import { SetDuDataFunction } from "../types";

export const fetchDuData = async (setDuData:SetDuDataFunction) => {
    try {
      const res = await axiosInstance.get(
        "/api/v1/delivery-unit/list-delivery-units/"
      );
      console.log("Response from API - du's got:", res.data.data);
      setDuData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };