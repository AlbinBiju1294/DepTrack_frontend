import { useEffect, useState } from "react";
import { fetchTransferCounts } from "./api/fetchTransferCounts";
import { TransferCountData } from "./types";
import TransferCounts from "./TransferCounts";

//Defines the data needed for displaying transfer counts in dashboard

const TransferCountsHandler = ({transferStatus}: {transferStatus: string}) => {
    const [transferCount, setTransferCount] = useState<TransferCountData>({});

  useEffect(() => {
    fetchTransferCounts(setTransferCount);
  }, []);
  return (
    <div>
      <TransferCounts transferStatus={transferStatus} transferCount={transferCount}></TransferCounts>
    </div>
  )
}

export default TransferCountsHandler
