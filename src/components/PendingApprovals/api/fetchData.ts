import axiosInstance from '../../../config/AxiosConfig';

export const fetchData = async (du_id: number | undefined, activeButton: number) => {
    try {
        
        const res = await axiosInstance.get(`/api/v1/transfer/pending-approvals/?du_id=${du_id}&tab_switch_btn=${activeButton}`);
        console.log(res.data.data);
        
    } 
    catch (error) {
    console.error("Error:", error);
    }
};