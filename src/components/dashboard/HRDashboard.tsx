
import React from 'react';
import { sampleEmployees } from '../../data/sampleData';
import { useEmployeeMetrics } from '../../hooks/useEmployeeMetrics';
import { useDepartmentAnalytics } from '../../hooks/useDepartmentAnalytics';
import { useHRMockData } from '../../hooks/useHRMockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import HRMetricsCards from './hr/HRMetricsCards';
import HRCharts from './hr/HRCharts';
import HRAnalytics from './hr/HRAnalytics';
import HRTopPerformers from './hr/HRTopPerformers';
import HREmployeeActivity from './hr/HREmployeeActivity';
import HRUpcomingEvents from './hr/HRUpcomingEvents';
import HRRecruitment from './hr/HRRecruitment';
import HRPayroll from './hr/HRPayroll';
import HRTraining from './hr/HRTraining';
import HRPerformance from './hr/HRPerformance';
import HRScheduling from './hr/HRScheduling';
import HRSafety from './hr/HRSafety';
import HREquipment from './hr/HREquipment';
import HRBenefits from './hr/HRBenefits';

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

      {/* HR Management Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-9">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Charts Section */}
          <HRCharts 
            departmentChartData={departmentChartData}
            attendanceData={attendanceData}
            chartConfig={chartConfig}
          />

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
        </TabsContent>

        <TabsContent value="recruitment">
          <HRRecruitment />
        </TabsContent>

        <TabsContent value="payroll">
          <HRPayroll />
        </TabsContent>

        <TabsContent value="training">
          <HRTraining />
        </TabsContent>

        <TabsContent value="performance">
          <HRPerformance />
        </TabsContent>

        <TabsContent value="scheduling">
          <HRScheduling />
        </TabsContent>

        <TabsContent value="safety">
          <HRSafety />
        </TabsContent>

        <TabsContent value="equipment">
          <HREquipment />
        </TabsContent>

        <TabsContent value="benefits">
          <HRBenefits />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HRDashboard;
