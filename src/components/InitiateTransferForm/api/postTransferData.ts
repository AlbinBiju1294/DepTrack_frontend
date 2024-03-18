import axiosInstance from "../../../config/AxiosConfig";
import { FormDataType } from "../types";
import { AxiosError } from "axios";

export const postTransferData = async (formData:FormDataType) => {
    try {
      const res = await axiosInstance.post(
        "/api/v1/transfer/create-transfer/",
        formData
      );
      console.log("Response from API - submission:", res);
      if(res.status === 201)
      {
          return {'status':true,'message':'Transfer Initiated Successfully'};
      }
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      const errorMessage = (err.response?.data as { error: string })?.error;
      return {'status': false, 'message': errorMessage};
    }
    
    console.log(formData);
  };