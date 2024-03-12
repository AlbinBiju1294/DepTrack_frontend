import axiosInstance from "../../../config/AxiosConfig";
import { AdminTableSetDataType } from "../types";

//Function to fetch delivery units and their heads
export const fetchDeliveryUnitData = async (
  setAdminData: AdminTableSetDataType
) => {
  try {
    const res = await axiosInstance.get("api/v1/employee/list-duheads/");
    const responseData = res.data.data;
    setAdminData(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
