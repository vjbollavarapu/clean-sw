
import { useMemo } from 'react';
import { Employee } from '../types';

export const useEmployeeMetrics = (employees: Employee[]) => {
  return useMemo(() => {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(e => e.status === 'active').length;
    const inactiveEmployees = employees.filter(e => e.status === 'inactive').length;
    const averageSalary = totalEmployees > 0 ? 
      employees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees : 0;

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees,
      averageSalary
    };
  }, [employees]);
};
