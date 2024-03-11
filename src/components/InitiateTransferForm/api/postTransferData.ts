import axiosInstance from "../../../config/AxiosConfig";
import { message } from "antd";
import { FormDataType } from "../types";
// const [messageApi, contextHolder] = message.useMessage();

export const postTransferData = async (formData:FormDataType) => {
    try {
      const res = await axiosInstance.post(
        "/api/v1/transfer/create-transfer/",
        formData
      );
      console.log("Response from API - submission:", res);
      if(res.status === 201)
      {
          return {'status':true,'message':'transfer initiated successfully'};
      }
    } catch (error) {
      console.log(error)
        return {'status':false,'message':'transfer initiation failed'};
    }
    console.log(formData);
  };