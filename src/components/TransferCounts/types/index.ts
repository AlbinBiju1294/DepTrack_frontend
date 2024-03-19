export type TransferCountsProps = {
    transferStatus: string;
    transferCount : TransferCountData
}
 
export type TransferCountData = {
    [status: string]: number;
  }