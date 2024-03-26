import axiosInstance from '../../../config/AxiosConfig';
import { EmployeeDataProps} from '../types/index'
 
export const fetchTransferDetailsEmployeeData = async (id:string|undefined,setUserData: React.Dispatch<React.SetStateAction<EmployeeDataProps |undefined>>, setCurrentDuNumber: React.Dispatch<React.SetStateAction<number>>) => {
    try {
      const res = await axiosInstance.get(`/api/v1/transfer/get-transfer-details/?transfer_id=${id}`);
      console.log('Response from API:', res.data);
               
      setUserData(prev => res.data.data);
    //   console.log(userData)
    console.log("emp du from emp data",res.data.data.currentdu.id);
    setCurrentDuNumber(res.data.data.currentdu.id);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};