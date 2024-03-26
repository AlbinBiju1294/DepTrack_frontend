import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import {  dataType } from './types';
import styles from'./DashboardPieChart.module.css'

// Renders a piechart to be displayed in the dashboard of a user which shows the employee count in all DUs.

const DashboardPieChart = ({data}: {data:dataType}) => {
  return (
    <div className={styles.pieChart}>
    <p className={styles.piechart_heading}>Employee Count</p>
    <PieChart
      series={[
        {
          arcLabel: (item) => {
            if(item.label === 'TalentPool')
              item.label = 'TP';
            else if(item.label === 'PitStop')
              item.label = 'PS';
            return `${item.label} (${item.value})`;
          },
            arcLabelMinAngle: 15,
            outerRadius: 90,
            innerRadius: 40,
            cornerRadius: 2,
            data: data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 40, additionalRadius: -5},
            cx: 230,
            cy: 120
        }
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'light',
          fontSize: 9
        },
      }}
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