
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../ui/chart';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line } from 'recharts';

interface SalaryData {
  department: string;
  averageSalary: number;
  totalBudget: number;
}

interface HiringData {
  quarter: string;
  hired: number;
  terminated: number;
  retention: number;
}

interface HRAnalyticsProps {
  salaryByDepartment: SalaryData[];
  hiringTrends: HiringData[];
  chartConfig: any;
}

const HRAnalytics = ({ salaryByDepartment, hiringTrends, chartConfig }: HRAnalyticsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Average Salary by Department */}
      <Card>
        <CardHeader>
          <CardTitle>Average Salary by Department</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryByDepartment}>
                <XAxis dataKey="department" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="averageSalary" 
                  fill="var(--color-employees)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Hiring Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Hiring & Retention Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hiringTrends}>
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  yAxisId="left"
                  dataKey="hired" 
                  fill="var(--color-hired)" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="terminated" 
                  fill="var(--color-terminated)" 
                  radius={[4, 4, 0, 0]}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="retention" 
                  stroke="var(--color-retention)" 
                  strokeWidth={2}
                  dot={{ fill: "var(--color-retention)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRAnalytics;
