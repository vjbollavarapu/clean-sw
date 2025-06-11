
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus } from 'lucide-react';
import { sampleEmployees } from '../data/sampleData';
import { Employee } from '../types';
import EmployeeModal from '../components/EmployeeModal';
import EmployeeStats from '../components/employees/EmployeeStats';
import EmployeeSearch from '../components/employees/EmployeeSearch';
import EmployeeTable from '../components/employees/EmployeeTable';

const Employees = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>(sampleEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'view' | 'edit' | 'add'>('view');

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if user has permission to manage employees
  const canManageEmployees = user?.role === 'Administrator' || user?.role === 'Management' || user?.role === 'HR Manager';

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleViewEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setSelectedEmployee(employee);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = (employeeId: string) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== employeeId));
    }
  };

  const handleSaveEmployee = (employee: Employee) => {
    if (modalMode === 'add') {
      setEmployees([...employees, employee]);
    } else if (modalMode === 'edit') {
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
    }
  };

  if (!canManageEmployees) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">You don't have permission to access employee management.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Employee Management</h1>
          <p className="text-muted-foreground">Manage company employees and their information</p>
        </div>
        <Button onClick={handleAddEmployee}>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <EmployeeStats employees={employees} />

      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <EmployeeSearch 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          <EmployeeTable
            employees={filteredEmployees}
            onViewEmployee={handleViewEmployee}
            onEditEmployee={handleEditEmployee}
            onDeleteEmployee={handleDeleteEmployee}
          />
        </CardContent>
      </Card>

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        employee={selectedEmployee}
        mode={modalMode}
        onSave={handleSaveEmployee}
      />
    </div>
  );
};

export default Employees;
