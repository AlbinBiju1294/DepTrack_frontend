import { PieChart } from '@mui/x-charts/PieChart';
import {  dataType } from './types';
import styles from'./DashboardPieChart.module.css'

const DashboardPieChart = ({data}: {data:dataType}) => {
  return (
    <div className={styles.pieChart}>
    <p className={styles.piechart_heading}>Employee Count</p>
    <PieChart
      series={[
        {
            outerRadius: 80,
            innerRadius: 40,
            cornerRadius: 2,
            data: data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 40, additionalRadius: -5},
            cx: 250,
            cy: 120
        }
      ]}
      height={300}
      width={350}
      slotProps={{
        legend: { hidden: true },
      }}
    />
    </div>
    
  );
}

export default DashboardPieChart;