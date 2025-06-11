
import React from 'react';
import { sampleEmployees } from '../../data/sampleData';
import { useEmployeeMetrics } from '../../hooks/useEmployeeMetrics';
import { useDepartmentAnalytics } from '../../hooks/useDepartmentAnalytics';
import { useHRMockData } from '../../hooks/useHRMockData';
import HRMetricsCards from './hr/HRMetricsCards';
import HRCharts from './hr/HRCharts';
import HRAnalytics from './hr/HRAnalytics';
import HRTopPerformers from './hr/HRTopPerformers';
import HREmployeeActivity from './hr/HREmployeeActivity';
import HRUpcomingEvents from './hr/HRUpcomingEvents';
import HRRecruitment from './hr/HRRecruitment';
import HRPayroll from './hr/HRPayroll';

const HRDashboard = () => {
  // Use custom hooks for data processing
  const { totalEmployees, activeEmployees, inactiveEmployees, averageSalary } = useEmployeeMetrics(sampleEmployees);
  const { departmentChartData, salaryByDepartment } = useDepartmentAnalytics(sampleEmployees);
  const { attendanceData, hiringTrends, topPerformers, upcomingEvents, chartConfig } = useHRMockData();

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <HRMetricsCards 
        totalEmployees={totalEmployees}
        activeEmployees={activeEmployees}
        inactiveEmployees={inactiveEmployees}
        averageSalary={averageSalary}
      />

      {/* Charts Section */}
      <HRCharts 
        departmentChartData={departmentChartData}
        attendanceData={attendanceData}
        chartConfig={chartConfig}
      />

      {/* Recruitment Management */}
      <HRRecruitment />

      {/* Payroll Management */}
      <HRPayroll />

      {/* Salary and Hiring Analytics */}
      <HRAnalytics 
        salaryByDepartment={salaryByDepartment}
        hiringTrends={hiringTrends}
        chartConfig={chartConfig}
      />

      {/* Detailed Information Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <HRTopPerformers topPerformers={topPerformers} />
        <HREmployeeActivity employees={sampleEmployees} />
      </div>

      {/* Upcoming Events */}
      <HRUpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  );
};

export default HRDashboard;
