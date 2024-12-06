import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { ChartData } from "../../../types/types/chart-data";

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

type PieChartProps = {
  data: ChartData[];
  //xAxisKey: string;
  //yAxisKey: string;
};

const CdPieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#3344d8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CdPieChart;
