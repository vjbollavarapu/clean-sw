
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Users, UserCheck, UserX, Calendar, DollarSign, TrendingUp, TrendingDown, Award, Clock } from 'lucide-react';

interface HRMetricsCardsProps {
  totalEmployees: number;
  activeEmployees: number;
  inactiveEmployees: number;
  averageSalary: number;
}

const HRMetricsCards = ({ totalEmployees, activeEmployees, inactiveEmployees, averageSalary }: HRMetricsCardsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalEmployees}</div>
          <div className="flex items-center text-xs mt-1">
            <UserCheck className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500">{activeEmployees} active</span>
            <UserX className="ml-2 mr-1 h-3 w-3 text-red-500" />
            <span className="text-red-500">{inactiveEmployees} inactive</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${averageSalary.toLocaleString()}</div>
          <div className="flex items-center text-xs mt-1">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500">+5.2%</span>
            <span className="text-muted-foreground ml-1">from last year</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">95.2%</div>
          <div className="flex items-center text-xs mt-1">
            <Clock className="mr-1 h-3 w-3 text-yellow-500" />
            <span className="text-muted-foreground">7.5% late arrivals</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Employee Turnover</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.2%</div>
          <div className="flex items-center text-xs mt-1">
            <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500">-1.8%</span>
            <span className="text-muted-foreground ml-1">from last quarter</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRMetricsCards;
