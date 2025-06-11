
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis } from 'recharts';

interface DepartmentData {
  department: string;
  employees: number;
  percentage: number;
}

interface AttendanceData {
  month: string;
  present: number;
  absent: number;
  late: number;
}

interface HRChartsProps {
  departmentChartData: DepartmentData[];
  attendanceData: AttendanceData[];
  chartConfig: any;
}

const HRCharts = ({ departmentChartData, attendanceData, chartConfig }: HRChartsProps) => {
  const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1'];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Department Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Department Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="employees"
                  label={({ department, percentage }) => `${department}: ${percentage}%`}
                >
                  {departmentChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Attendance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Attendance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={attendanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="present"
                  stackId="1"
                  stroke="var(--color-present)"
                  fill="var(--color-present)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="late"
                  stackId="1"
                  stroke="var(--color-late)"
                  fill="var(--color-late)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="absent"
                  stackId="1"
                  stroke="var(--color-absent)"
                  fill="var(--color-absent)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRCharts;
