
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SystemResourcesChartProps {
  data: Array<{
    time: string;
    cpu: number;
    memory: number;
    disk: number;
    network: number;
  }>;
}

const SystemResourcesChart: React.FC<SystemResourcesChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          System Resources
        </CardTitle>
        <CardDescription>Real-time system resource utilization</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#ff7300" strokeWidth={2} name="CPU" />
            <Line type="monotone" dataKey="memory" stroke="#387908" strokeWidth={2} name="Memory" />
            <Line type="monotone" dataKey="disk" stroke="#8884d8" strokeWidth={2} name="Disk" />
            <Line type="monotone" dataKey="network" stroke="#82ca9d" strokeWidth={2} name="Network" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SystemResourcesChart;
