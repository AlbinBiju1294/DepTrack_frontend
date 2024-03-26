import axiosInstance from '../../../config/AxiosConfig';

export const patchRejectData = async (id:string|undefined, reason: string, handleCloseReject: () => void) => {
    try {
        
        const res = await axiosInstance.patch(`/api/v1/transfer/request-rejected`, {
            transfer_id:id,
            rejection_reason: reason
          });
    
          console.log('Rejection reason submitted successfully:', res.data);
          handleCloseReject();
        
    } 
    catch (error) {
    console.error("Error:", error);
    }
};