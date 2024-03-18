import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCountsDisplay from '../TransferCountsDisplay/TransferCountsDisplay'
import DuDetails from '../DuDetails/DuDetails'
import DashboardPieChart from '../../DashboardPieChart/DashboardPieChart'
import DashboardPieChartHandler from '../../DashboardPieChart/DashboardPieChartHandler'

const InnerContainer = () => {
 
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
      <div className={styles.statistical_data}>
        <DuBar></DuBar>
        <DashboardPieChartHandler></DashboardPieChartHandler>
      </div>
        <p className={styles.du_stats}>DU Stats</p>
        <div className={styles.du_transfer_details}>
        <TransferCountsDisplay></TransferCountsDisplay>
        <DuDetails></DuDetails>
      </div>
    </div>
  )
}

export default InnerContainer