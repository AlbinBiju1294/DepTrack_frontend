import axiosInstance from '../../../config/AxiosConfig';

export const patchRejectData = async (id:string|undefined, reason: string, handleCloseReject: () => void) => {
    try {
        
        const res = await axiosInstance.patch(`http://127.0.0.1:8000/api/v1/transfer/request-rejected/`, {
            transfer_id:id,
            rejection_reason: reason
          });
    
          handleCloseReject();
        
    } 
    catch (error) {
    console.error("Error:", error);
    }
};