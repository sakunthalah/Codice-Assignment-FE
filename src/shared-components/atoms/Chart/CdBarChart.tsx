import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../../types/types/chart-data';

// Define the type for our data
// export type ChartData = {
//   name: string;
//   value: number;
// };

// Sample data for the chart
// const data: ChartData[] = [
//   { name: 'Page A', value: 400 },
//   { name: 'Page B', value: 300 },
//   { name: 'Page C', value: 200 },
//   { name: 'Page D', value: 278 },
//   { name: 'Page E', value: 189 },
// ];

type BarChartProps = {
  data: ChartData[];
  //xAxisKey: string;
  //yAxisKey: string;
};

const CdBarChart: React.FC<BarChartProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CdBarChart;