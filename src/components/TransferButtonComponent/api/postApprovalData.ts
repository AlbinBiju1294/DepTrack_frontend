import axiosInstance from "../../../config/AxiosConfig";
import { datePmPostDataType } from "../types";

export const postApprovalData = async(datePmPostData: datePmPostDataType) => {
    try {
        const response = await axiosInstance.put("/api/v1/transfer/individual-approval/", datePmPostData);
        console.log("After submission of approval date: ", response);
        if(response.status === 200)
          return {'status':true,'message':'Transfer date and PM changed successfully.'};

    } catch (error) {
      console.log(error)
        return {'status':false,'message':'Error in changing the transfer date and PM'};
    }
    console.log(datePmPostData);
};