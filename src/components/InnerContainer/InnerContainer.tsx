import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCountsDisplay from '../TransferCountsDisplay/TransferCountsDisplay'
import DuDetails from '../DuDetails/DuDetails'
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
        {/* <div className={styles.bar_graph_label}>
        <div className={styles.square_div}></div>
        <p>Last 30 days</p>
        </div> */}
        <div className={styles.du_transfer_details}>
        <TransferCountsDisplay></TransferCountsDisplay>
        <DuDetailsHandler></DuDetailsHandler>
      </div>
    </div>
  )
}

export default InnerContainer