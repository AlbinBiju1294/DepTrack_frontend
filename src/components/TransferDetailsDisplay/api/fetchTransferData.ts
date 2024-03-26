import axiosInstance from '../../../config/AxiosConfig';
import {FormDataDisplayProps} from '../types/index'

export const fetchTransferData = async (id:string|undefined, setFormData:React.Dispatch<React.SetStateAction<FormDataDisplayProps | undefined>>, setTransferDate: React.Dispatch<React.SetStateAction<string>>) => {
    try {

        const res = await axiosInstance.get(`/api/v1/transfer/get-transfer-details/?transfer_id=${id}`);
        console.log('Response from API:', res.data);
        setFormData(res.data.data);
        setTransferDate(res.data.data?.transfer_date ?? '');
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};