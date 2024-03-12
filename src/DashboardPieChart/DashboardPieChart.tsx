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
    
    const colors = ['#d3e3ff', '#adcafe', '#86b1fe', '#5f98fe', '#387ffd', '#1166fd', '#0245be']
    const data = pieChartData.map((chartData, index) => ({
      label: chartData.du_name,
      value: chartData.no_of_employees,
      color: colors[index % colors.length]
    }));
    
    console.log(data);
  return (
    <div className={styles.pieChart}>
    <p className={styles.piechart_heading}>Number of Employees</p>
    <PieChart
      series={[
        {
            outerRadius: 80,
            innerRadius: 40,
            cornerRadius: 2,
            highlightScope: { faded: 'global', highlighted: 'item' },
            data: data,
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