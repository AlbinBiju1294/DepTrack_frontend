import React, {useEffect, useState} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { getPieChartData } from './api/getPieChartData';
import {  pieChartDataType } from './types';
import styles from'./DashboardPieChart.module.css'

const DashboardPieChart = () => {

    const [pieChartData, setPieChartData] = useState<pieChartDataType[]>([]);

    useEffect(()=>{
        getPieChartData(setPieChartData);
    }, [])
    
    const colors = ['#99befe', '#72a5fe', '#4b8cfd', '#2473fd', '#025bf8', '#0245be', '#013083']
    const data = pieChartData.map((chartData, index) => ({
      label: chartData.du_name,
      value: chartData.no_of_employees,
      color: colors[index % colors.length]
    }));
    
    console.log(data);
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