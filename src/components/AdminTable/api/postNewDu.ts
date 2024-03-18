import axiosInstance from "../../../config/AxiosConfig";
import { FormDataType } from "../types";

export const postNewDu = async (formData: FormDataType) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/delivery-unit/add-du",
      formData
    );
    console.log("After submission of data: ", response);
    console.log(response.status);
    if (response.status === 201)
      return {
        status: true,
        message: "Du Creation Succesful.",
      };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Du Creation Failed",
    };
  }
};
