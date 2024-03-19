import styles from './DuDetails.module.css' 
import DuDetailsCard from '../DuDetailsCard/DuDetailsCard';
import { DuDetailsProps } from './types';

const DuDetails =({duData}: {duData: DuDetailsProps | undefined}) => {
 
return (
    <div className={styles.dudetails}>
    <div className={`${styles.header}`}>DU Details</div>
    <div className={`${styles.card}`}>
     
      <DuDetailsCard name="Delivery Unit Name :" value={duData?duData.du_name: ""}/>
      {/* <DuDetailsCard name="Number Of PMs :" value={duData?duData.no_of_pms:""}/> */}
      <DuDetailsCard name="Number Of Employees :" value={duData?duData.no_of_employees:""}/>
 
    </div>
    </div>
  )
}
export default DuDetails