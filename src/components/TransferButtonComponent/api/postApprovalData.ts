import axiosInstance from "../../../config/AxiosConfig";
import { datePmPostDataType } from "../types";
export enum DuApproval {
  targetDu = 'targetDu',
  currentDu = 'currentDu'
};
export const postApprovalData = async(datePmPostData: datePmPostDataType, duApproval: DuApproval) => {
    try {
        if(duApproval === DuApproval.targetDu)
        {
          console.log(duApproval);
          
          const response = await axiosInstance.put("/api/v1/transfer/individual-approval/", datePmPostData);
          console.log("After submission of approval date and pm: ", response);
          if(response.status === 200)
            return {'status':true,'message':'Request approved by target DU head.'};
        }
        else if(duApproval === DuApproval.currentDu){
          console.log(duApproval);
          const response = await axiosInstance.put("/api/v1/transfer/cdu-request-approval/", datePmPostData);
          console.log("After submission of approval date: ", response);
          if(response.status === 200)
            return {'status':true,'message':'Request approved by current DU head.'};
        }
        
    } catch (error) {
      console.log(error)
        return {'status':false,'message':'Error in changing the transfer date and PM'};
    }
    console.log(datePmPostData);
};