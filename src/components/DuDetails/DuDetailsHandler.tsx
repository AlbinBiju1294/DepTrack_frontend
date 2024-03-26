import { DuDetailsProps } from './types';
import { fetchDuDetailsData } from './api/fetchDuDetailsData';
import { useEffect, useState } from 'react';
import DuDetails from './DuDetails';

const DuDetailsHandler = () => {
     
  const [duData,setDuData] = useState<DuDetailsProps>();

  useEffect(() => {
    fetchDuDetailsData(setDuData);
    }, []);
   
  return (
    <div>
      <DuDetails duData={duData}></DuDetails>
    </div>
  )
}

export default DuDetailsHandler
