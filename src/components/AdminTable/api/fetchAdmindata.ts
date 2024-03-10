import axiosInstance from "../../../config/AxiosConfig";
import { AdminTableSetDataType } from "../types";

export const fetchDeliveryUnitData = async (
  setAdminData: AdminTableSetDataType
) => {
  try {
    const res = await axiosInstance.get("api/v1/employee/list-duheads/");
    const responseData = res.data.data;
    console.log(responseData);
    console.log("DU and DU heads ", responseData.results);
    setAdminData(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
