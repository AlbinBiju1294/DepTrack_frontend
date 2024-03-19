import { DuDetailsProps } from './types';
import { fetchDuDetails } from './api/fetchDuDetails';
import { useEffect, useState } from 'react';
import DuDetails from './DuDetails';

const DuDetailsHandler = () => {
     
  const [duData,setDuData] = useState<DuDetailsProps>();

  useEffect(() => {
    fetchDuDetails(setDuData);
    }, []);
   
  return (
    <div>
      <DuDetails duData={duData}></DuDetails>
    </div>
  )
}

export default DuDetailsHandler
