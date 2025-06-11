
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Clock, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

interface EmployeeMetricsCardsProps {
  completedTasks: number;
  inProgressTasks: number;
  pendingTasks: number;
  totalEarnings: number;
  completionRate: number;
  totalHoursThisWeek: number;
}

const EmployeeMetricsCards = ({
  completedTasks,
  inProgressTasks,
  pendingTasks,
  totalEarnings,
  completionRate,
  totalHoursThisWeek
}: EmployeeMetricsCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedTasks}</div>
          <p className="text-xs text-muted-foreground">
            {completionRate}% completion rate
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          <AlertCircle className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inProgressTasks}</div>
          <p className="text-xs text-muted-foreground">
            Active assignments
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
          <Clock className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalHoursThisWeek}</div>
          <p className="text-xs text-muted-foreground">
            Working hours logged
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Earnings</CardTitle>
          <DollarSign className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            From completed tasks
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeMetricsCards;
