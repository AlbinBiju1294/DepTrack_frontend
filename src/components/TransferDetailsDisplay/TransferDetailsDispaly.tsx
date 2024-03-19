import * as React from 'react';
import TransferDetailsDisplayBody from '../TransferDetailsDisplayBody/TransferDetailsDisplayBody';
import {FormDataDisplayProps} from './types/index';
import styles from './TransferDetailsDisplay.module.css';
import {TransferDataDisplayPropsType} from './types/index'
import moment from 'moment';


export default function TransferDetailsDisplay({formData}:TransferDataDisplayPropsType) {


  return (
    <div className={`${styles.Form_Outer_Card}`}>
        <div className={styles.Form_Inner_container}>
          <div className={styles.Form_left_side}>
            <div className={`${styles.Form_data}`}>
              <TransferDetailsDisplayBody name="1.  Employee id:" /> 
              <TransferDetailsDisplayBody name="2.  Current Department:" />
              <TransferDetailsDisplayBody name="3.  Band:"/>
              <TransferDetailsDisplayBody name="4.  Total Experience:"/>
              <TransferDetailsDisplayBody name="5.  Experience in Experion:"/>
              <TransferDetailsDisplayBody name="6.  Reason for Release:"/>
              <TransferDetailsDisplayBody name="7.  Skills:"/>
              <TransferDetailsDisplayBody name="8.  Upskilling Suggestions:"/>
              <TransferDetailsDisplayBody name="9. Strength:"/>
              <TransferDetailsDisplayBody name="10. Transfer Date:"/>
              <TransferDetailsDisplayBody name="11. Transfer Raised on:"/>
              <TransferDetailsDisplayBody name="12. Initiated by:"/>
          </div>
          </div>

          <div className={styles.Form_right_side}>
            <div className={`${styles.Form_data}`}>
             <TransferDetailsDisplayBody value={formData?formData.employee.id: ""}/>  
              <TransferDetailsDisplayBody value={formData?formData.currentdu.du_name: ""}/>
              <TransferDetailsDisplayBody value={formData?.details?.employee_band || "-"}/>   
              <TransferDetailsDisplayBody value={formData?.details?.total_experience + " years" || "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.experion_experience + " years" || "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.releaseReason ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.employee_skills ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.upskilling_suggestions ?? "-"} />
              <TransferDetailsDisplayBody value={formData?.details?.strengths ?? "-"} />
              <TransferDetailsDisplayBody value={formData?moment(formData.transfer_date).format('DD-MM-YYYY'): ""}/>
              <TransferDetailsDisplayBody value={formData?moment(formData.transfer_raised_on).format('DD-MM-YYYY'): ""}/>
              <TransferDetailsDisplayBody value={formData?formData.initiated_by.name:""}/>    
            </div>
          </div>
        </div>
    </div>
  );
}




