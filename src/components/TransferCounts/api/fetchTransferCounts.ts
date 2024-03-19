import axiosInstance from "../../../config/AxiosConfig";
import { TransferCountData } from "../types";

export const fetchTransferCounts = async (setTransferCount: React.Dispatch<React.SetStateAction<TransferCountData>> ) => {
    try {
      const res = await axiosInstance.get(
        "http://127.0.0.1:8000/api/v1/transfer/status-count/"
      );
      console.log("Transfers counts: ", res.data.data);
      setTransferCount(res.data.data);
    } catch (error) {
      console.error("Error");
    }
  };