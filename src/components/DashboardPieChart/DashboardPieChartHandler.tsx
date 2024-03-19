import {useEffect, useState} from 'react';
import { getPieChartData } from './api/getPieChartData';
import {  pieChartDataType } from './types';
import DashboardPieChart from './DashboardPieChart';

const DashboardPieChartHandler = () => {
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
    
  return (
    <div>
      <DashboardPieChart data={data}></DashboardPieChart>
    </div>
  )
}

export default DashboardPieChartHandler
