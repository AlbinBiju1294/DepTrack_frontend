import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import styles from './DuBar.module.css'
import { Padding } from '@mui/icons-material';

interface AxisConfig {
    id: string;
    data: string[]; // or whatever type xdata is
    scaleType: 'band';
    categoryGapRatio?: number; // Make categoryGapRatio optional
}

interface YaxisConfig {
  id: string;
  label: string;
  
}


const DuBar = () => {

    
    const [duData, setDuData] = useState<Array<{ du_name: string; no_of_transfers: number }>>([]);
  const [xdata, setXdata] = useState<Array<string>>([]);
  const [ydata, setYdata] = useState<Array<number>>([]);
  const [isLoaded,setIsLoaded] = useState(false)

  const token = localStorage.getItem('access_token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/bargraph-data/', config);
        console.log('Response from API:', res.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log("duData:", duData);
    if (duData && duData.length > 0) {
        const newyData: number[] = [];
        const newxData: string[] = [];
      // Perform operations on duData after it has been updated
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
      console.log(xdata)
      console.log(ydata)
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
