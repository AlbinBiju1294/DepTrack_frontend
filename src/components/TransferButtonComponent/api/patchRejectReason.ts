import axiosInstance from '../../../config/AxiosConfig';

export const patchRejectReason = async (id:string|undefined, reason: string, handleCloseReject: () => void) => {
    try {
        
        const res = await axiosInstance.patch(`http://127.0.0.1:8000/api/v1/transfer/request-rejected`, {
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