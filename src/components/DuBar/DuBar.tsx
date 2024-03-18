import { BarChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import styles from './DuBar.module.css';
import { AxisConfig,YaxisConfig } from './types';
import { fetchBarGraphData } from './api/fetchBarGraphData';


const DuBar = () => {
  const [duData, setDuData] = useState<Array<{ du_name: string; no_of_transfers: number }>>([]);
  const [xdata, setXdata] = useState<Array<string>>([]);
  const [ydata, setYdata] = useState<Array<number>>([]);
  const [isLoaded,setIsLoaded] = useState(false)

  //for fetching bargraph data on rendering
  useEffect(() => {
    fetchBarGraphData(setDuData)
  }, []);
  
  //for setting the xaxis and yaxis data
  useEffect(() => {
    if (duData && duData.length > 0) {
        const newyData: number[] = [];
        const newxData: string[] = [];
      duData.forEach((data) => {
        if(data.du_name == "TalentPool")
        {
          newxData.push("TP");
          newyData.push(data.no_of_transfers as number);
        }
        else
        {
          newxData.push(data.du_name as string);
          newyData.push(data.no_of_transfers as number);
        }
        
      });
      setXdata(newxData);
      setYdata(newyData);
      setIsLoaded(true)
    }
  }, [duData]);
  

  return (
    <div>
      <div className={styles.bar_graph_heading_container}>
      <p className={styles.bar_graph_heading}>Total Transfers Completed </p>
      <div className={styles.bar_graph_label}>
        <div className={styles.square_div}></div>
        <p>Last 30 days</p>
      </div>
      </div>
      
      <div className={styles.bar_chart}>
      {isLoaded?<BarChart 
        xAxis={[
          {
            id: 'barCategories',
            data: xdata,
            scaleType: 'band',
            label: 'DU Name',
            labelStyle: {
              fontSize: 12,
            },
            categoryGapRatio: 0.6,
            fontSize:1
          } as AxisConfig,
        ]}
        series={[
          {
            data: ydata,
            color: '#5A6ACF',
          },
        ]}
        yAxis={[
          {
            id: 'yAxis',
            label: 'No of Transfers',
            labelStyle: {
              fontSize: 12,
            },
          } as YaxisConfig,
        ]}
        width={550}
        height={230}
      />:<></>}
      </div>
    </div>
  );
};

export default DuBar;
