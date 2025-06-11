
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useEmployeeData } from '../../hooks/useEmployeeData';
import EmployeeMetricsCards from './employee/EmployeeMetricsCards';
import EmployeeTimeTracking from './employee/EmployeeTimeTracking';
import EmployeeRecentActivity from './employee/EmployeeRecentActivity';
import EmployeeUpcomingDeadlines from './employee/EmployeeUpcomingDeadlines';
import EmployeeQuickActions from './employee/EmployeeQuickActions';

interface EmployeeDashboardProps {
  user: any;
}

const EmployeeDashboard = ({ user }: EmployeeDashboardProps) => {
  const {
    myTasks,
    completedTasks,
    inProgressTasks,
    pendingTasks,
    totalEarnings,
    completionRate,
    timeTrackingData,
    totalHoursThisWeek,
    overtimeHours,
    recentActivities,
    upcomingDeadlines
  } = useEmployeeData(user.id);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Good morning, {user.name}!</h2>
          <p className="text-muted-foreground">Here's what's happening with your work today</p>
        </div>
        <Badge variant="outline" className="text-sm">
          {user.department || 'Employee'}
        </Badge>
      </div>

      {/* Metrics Cards */}
      <EmployeeMetricsCards
        completedTasks={completedTasks}
        inProgressTasks={inProgressTasks}
        pendingTasks={pendingTasks}
        totalEarnings={totalEarnings}
        completionRate={completionRate}
        totalHoursThisWeek={totalHoursThisWeek}
      />

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Time Tracking */}
        <div className="lg:col-span-1">
          <EmployeeTimeTracking
            timeTrackingData={timeTrackingData}
            overtimeHours={overtimeHours}
          />
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <EmployeeQuickActions />
        </div>

        {/* Upcoming Deadlines */}
        <div className="lg:col-span-1">
          <EmployeeUpcomingDeadlines upcomingDeadlines={upcomingDeadlines} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <EmployeeRecentActivity recentActivities={recentActivities} />

        {/* My Assigned Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>My Assigned Tasks</CardTitle>
            <CardDescription>Current service orders assigned to you</CardDescription>
          </CardHeader>
          <CardContent>
            {myTasks.length > 0 ? (
              <div className="space-y-3">
                {myTasks.slice(0, 5).map(task => (
                  <div key={task.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{task.serviceType}</h4>
                        <p className="text-sm text-muted-foreground">{task.clientName}</p>
                        <p className="text-xs text-muted-foreground">{task.location}</p>
                      </div>
                      <Badge variant={
                        task.status === 'completed' ? 'default' :
                        task.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {task.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="mt-2 flex justify-between items-center text-xs text-muted-foreground">
                      <span>Due: {new Date(task.scheduledDate).toLocaleDateString()}</span>
                      <span className="font-medium">${task.amount.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
                {myTasks.length > 5 && (
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    +{myTasks.length - 5} more tasks
                  </p>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-6">No tasks assigned currently.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
