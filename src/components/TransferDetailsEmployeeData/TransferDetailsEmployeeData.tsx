import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import styles from './TransferDetailsEmployeeData.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TransferDetailsEmployeePropsType } from './types/index';
 
 
 
 
const TransferDetailsEmployeeData = ({userData}:TransferDetailsEmployeePropsType) => {
  "Displays the Employee details such as employee name,designation,email id ,current and traget du in the pending approvals page"
 
 
  return (
    <>
      <div  className= {`${styles.Main_wrapping_Container}`}  >
    <div className= {`${styles.Left_Container}`}>
        <div>
            <AccountCircleIcon  className= {`${styles.Employee_icon_container}`} ></AccountCircleIcon>
 
        </div>
        <div className= {`${styles.Employee_details_container}`}>
            <h4  className= {`${styles.Employee_name}`}>{userData?userData.employee.name:""}</h4>
                <h4>{userData?userData.employee.designation:""}</h4>
                <p>{userData?userData.employee.mail_id:""}</p>
        </div>
    </div>
 
 
    <div className= {`${styles.Right_Container}`}>
            <div className= {`${styles.Card}`}>
             <p>{userData?userData.currentdu?.du_name:""}</p>
            </div>
 
        <div className= {`${styles.Arrow_Container}`}>
            <IconButton className={`${styles.ArrowIcon}`}>
                <ArrowForwardIcon />
            </IconButton>
        </div>
 
        <div className= {`${styles.CDU_container}`}>
            <div className= {`${styles.Card}`}>
                <p>{userData?userData.targetdu.du_name:""}</p>
            </div>
        </div>
    </div>
    </div>
    </>
 
  )}
export default TransferDetailsEmployeeData