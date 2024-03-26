import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCountsDisplay from '../TransferCountsDisplay/TransferCountsDisplay'
import DashboardPieChartHandler from '../DashboardPieChart/DashboardPieChartHandler'
import DuDetailsHandler from '../DuDetails/DuDetailsHandler'

const InnerContainer = () => {
 
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
      <div className={styles.statistical_data}>
        <DuBar></DuBar>
        <DashboardPieChartHandler></DashboardPieChartHandler>
      </div>
        <p className={styles.du_stats}>DU Stats<span className={styles.range}><span className={styles.square_div}></span>Last 30 days</span></p>
        <div className={styles.du_transfer_details}>
        <TransferCountsDisplay></TransferCountsDisplay>
        <DuDetailsHandler></DuDetailsHandler>
      </div>
    </div>
  )
}

export default InnerContainer