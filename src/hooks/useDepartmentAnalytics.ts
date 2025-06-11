
import { useMemo } from 'react';
import { Employee } from '../types';

export const useDepartmentAnalytics = (employees: Employee[]) => {
  return useMemo(() => {
    const totalEmployees = employees.length;
    
    // Calculate department distribution
    const departmentData = employees.reduce((acc, employee) => {
      acc[employee.department] = (acc[employee.department] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const departmentChartData = Object.entries(departmentData).map(([dept, count]) => ({
      department: dept,
      employees: count,
      percentage: Math.round((count / totalEmployees) * 100)
    }));

    // Salary distribution by department
    const salaryByDepartment = Object.entries(
      employees.reduce((acc, employee) => {
        if (!acc[employee.department]) {
          acc[employee.department] = { total: 0, count: 0 };
        }
        acc[employee.department].total += employee.salary;
        acc[employee.department].count += 1;
        return acc;
      }, {} as Record<string, { total: number; count: number }>)
    ).map(([dept, data]) => ({
      department: dept,
      averageSalary: Math.round(data.total / data.count),
      totalBudget: data.total
    }));

    return {
      departmentChartData,
      salaryByDepartment
    };
  }, [employees]);
};
