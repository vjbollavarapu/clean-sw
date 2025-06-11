
import { useMemo } from 'react';

export const useHRMockData = () => {
  return useMemo(() => {
    // Mock attendance data
    const attendanceData = [
      { month: 'Jan', present: 95, absent: 5, late: 8 },
      { month: 'Feb', present: 92, absent: 8, late: 12 },
      { month: 'Mar', present: 96, absent: 4, late: 6 },
      { month: 'Apr', present: 94, absent: 6, late: 10 },
      { month: 'May', present: 97, absent: 3, late: 5 },
      { month: 'Jun', present: 93, absent: 7, late: 9 },
    ];

    // Mock hiring trends
    const hiringTrends = [
      { quarter: 'Q1 2024', hired: 12, terminated: 3, retention: 95 },
      { quarter: 'Q2 2024', hired: 8, terminated: 5, retention: 92 },
      { quarter: 'Q3 2024', hired: 15, terminated: 2, retention: 97 },
      { quarter: 'Q4 2024', hired: 10, terminated: 4, retention: 94 },
    ];

    // Top performers
    const topPerformers = [
      { name: 'Sarah Johnson', department: 'Management', rating: 4.9, projects: 8 },
      { name: 'John Smith', department: 'Engineering', rating: 4.8, projects: 12 },
      { name: 'Mike Chen', department: 'Sales', rating: 4.7, projects: 15 },
      { name: 'Lisa Brown', department: 'Marketing', rating: 4.6, projects: 6 },
    ];

    // Upcoming reviews and anniversaries
    const upcomingEvents = [
      { type: 'review' as const, employee: 'Alex Wilson', date: '2024-06-15', department: 'Engineering' },
      { type: 'anniversary' as const, employee: 'Jane Doe', date: '2024-06-18', years: 3 },
      { type: 'review' as const, employee: 'Tom Anderson', date: '2024-06-20', department: 'Sales' },
      { type: 'anniversary' as const, employee: 'Emily Davis', date: '2024-06-22', years: 5 },
    ];

    const chartConfig = {
      employees: { label: "Employees", color: "#8884d8" },
      present: { label: "Present", color: "#82ca9d" },
      absent: { label: "Absent", color: "#ffc658" },
      late: { label: "Late", color: "#ff7300" },
      hired: { label: "Hired", color: "#8884d8" },
      terminated: { label: "Terminated", color: "#ff7300" },
      retention: { label: "Retention %", color: "#82ca9d" },
    };

    return {
      attendanceData,
      hiringTrends,
      topPerformers,
      upcomingEvents,
      chartConfig
    };
  }, []);
};
