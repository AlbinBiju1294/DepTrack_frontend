import axiosInstance from '../../../config/AxiosConfig';
import { DuDetailsProps } from '../types';

export const fetchDuDetails = async (setDuData: React.Dispatch<React.SetStateAction<DuDetailsProps | undefined>>) => {
    try {
      const res = await  axiosInstance.get('http://127.0.0.1:8000/api/v1/delivery-unit/dashboard-du-details');
      console.log('Response from API:', res.data);
      setDuData(res.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };