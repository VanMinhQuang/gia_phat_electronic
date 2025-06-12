import {useState, useEffect} from 'react';
import { chartMock } from '../../data/model/dashboard/dashboard.mock';
import { Chart } from '../../data/model/dashboard/dashboard.model';

// Simulate API call for changing year
export async function changeYearMock(yearOffSet: number) {
  // You can customize this to return different data per yearOffSet if needed
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(chartMock);
    }, 800);
  });
}

export function useDashboardChartHook() {
  const [chartData, setChartData] = useState<Chart[]>([]);
  const [loading, setLoading] = useState(true);
  const [yearOffset, setYearOffset] = useState(new Date().getFullYear()); // Default to current year

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setChartData(chartMock);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);


  const changeYear = async (offset: number) => {
      setLoading(true);
    setYearOffset(offset);
    const data = await changeYearMock(offset);
    setChartData(data as Chart[]);
    setLoading(false);
  };

  return { chartData, loading, yearOffset, changeYear };
}