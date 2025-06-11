
import { useMemo } from 'react';
import { sampleServiceOrders } from '../data/sampleData';

export const useEmployeeData = (userId: string) => {
  return useMemo(() => {
    const myTasks = sampleServiceOrders.filter(order => 
      order.assignedEmployees.includes(userId)
    );

    const completedTasks = myTasks.filter(task => task.status === 'completed');
    const inProgressTasks = myTasks.filter(task => task.status === 'in-progress');
    const pendingTasks = myTasks.filter(task => task.status === 'pending');

    const totalEarnings = completedTasks.reduce((sum, task) => sum + task.amount, 0);
    const completionRate = myTasks.length > 0 ? Math.round((completedTasks.length / myTasks.length) * 100) : 0;

    // Mock time tracking data
    const timeTrackingData = [
      { date: '2024-06-10', hours: 8, overtime: 0 },
      { date: '2024-06-11', hours: 8.5, overtime: 0.5 },
      { date: '2024-06-12', hours: 7.5, overtime: 0 },
      { date: '2024-06-13', hours: 9, overtime: 1 },
      { date: '2024-06-14', hours: 8, overtime: 0 },
    ];

    const totalHoursThisWeek = timeTrackingData.reduce((sum, day) => sum + day.hours, 0);
    const overtimeHours = timeTrackingData.reduce((sum, day) => sum + day.overtime, 0);

    // Mock recent activities
    const recentActivities = [
      { id: '1', action: 'Completed task', description: 'Office Cleaning - ABC Corp', time: '2 hours ago' },
      { id: '2', action: 'Started task', description: 'Window Cleaning - XYZ Ltd', time: '4 hours ago' },
      { id: '3', action: 'Updated status', description: 'Carpet Cleaning - DEF Inc', time: '1 day ago' },
      { id: '4', action: 'Submitted timesheet', description: 'Week ending June 14', time: '2 days ago' },
    ];

    // Mock upcoming deadlines - fixed with proper literal types
    const upcomingDeadlines = [
      { id: '1', task: 'Monthly Report Submission', dueDate: '2024-06-20', priority: 'high' as const },
      { id: '2', task: 'Team Meeting Preparation', dueDate: '2024-06-18', priority: 'medium' as const },
      { id: '3', task: 'Equipment Maintenance Check', dueDate: '2024-06-25', priority: 'low' as const },
    ];

    return {
      myTasks,
      completedTasks: completedTasks.length,
      inProgressTasks: inProgressTasks.length,
      pendingTasks: pendingTasks.length,
      totalEarnings,
      completionRate,
      timeTrackingData,
      totalHoursThisWeek,
      overtimeHours,
      recentActivities,
      upcomingDeadlines
    };
  }, [userId]);
};
