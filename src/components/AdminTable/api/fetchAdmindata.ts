import { SetHrbpCandidatesType } from "./../types/index";
import axiosInstance from "../../../config/AxiosConfig";
import { AdminTableSetDataType, SetDuCandidatesType } from "../types";

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

//Funtion to fetch employees with role 1 but not mapped to a DU
export const fetchDuheadsCandidates = async (
  setDuHeads: SetDuCandidatesType
) => {
  try {
    const res = await axiosInstance.get("api/v1/employee/get-du-candidates/");
    const responseData = res.data.data;
    setDuHeads(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

//Function to fetch employees with role 4 but not mappped to any DU
export const fetchHrbpCandidates = async (
  SetHrbpCandidates: SetHrbpCandidatesType
) => {
  try {
    const res = await axiosInstance.get("api/v1/employee/get-hrbp-candidates/");
    const responseData = res.data.data;
    SetHrbpCandidates(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};



