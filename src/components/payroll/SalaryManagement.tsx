
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import { 
  DollarSign, 
  Search, 
  Edit, 
  TrendingUp, 
  Users,
  Plus,
  Filter,
  Calendar
} from 'lucide-react';

const SalaryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const employeeSalaries = [
    {
      id: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Developer',
      currentSalary: 8000,
      lastReview: '2024-01-15',
      nextReview: '2024-07-15',
      performance: 'Excellent',
      adjustmentType: 'Merit Increase'
    },
    {
      id: 'EMP002',
      name: 'Sarah Johnson',
      department: 'Sales',
      position: 'Sales Manager',
      currentSalary: 6500,
      lastReview: '2024-02-01',
      nextReview: '2024-08-01',
      performance: 'Good',
      adjustmentType: 'Annual Review'
    },
    {
      id: 'EMP003',
      name: 'Mike Chen',
      department: 'Marketing',
      position: 'Marketing Specialist',
      currentSalary: 5500,
      lastReview: '2024-01-20',
      nextReview: '2024-07-20',
      performance: 'Satisfactory',
      adjustmentType: 'Cost of Living'
    },
    {
      id: 'EMP004',
      name: 'Emily Davis',
      department: 'HR',
      position: 'HR Coordinator',
      currentSalary: 4800,
      lastReview: '2024-03-01',
      nextReview: '2024-09-01',
      performance: 'Good',
      adjustmentType: 'Promotion'
    }
  ];

  const salaryBands = [
    { level: 'Entry Level', minSalary: 3000, maxSalary: 4500, employees: 25 },
    { level: 'Junior', minSalary: 4500, maxSalary: 6000, employees: 45 },
    { level: 'Mid-Level', minSalary: 6000, maxSalary: 8000, employees: 52 },
    { level: 'Senior', minSalary: 8000, maxSalary: 12000, employees: 28 },
    { level: 'Executive', minSalary: 12000, maxSalary: 20000, employees: 6 }
  ];

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'Excellent':
        return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
      case 'Good':
        return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
      case 'Satisfactory':
        return <Badge className="bg-yellow-100 text-yellow-800">Satisfactory</Badge>;
      default:
        return <Badge variant="secondary">{performance}</Badge>;
    }
  };

  const filteredEmployees = employeeSalaries.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Salary Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Average Salary</p>
                <p className="text-2xl font-bold text-green-600">$6,200</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Salary Range</p>
                <p className="text-2xl font-bold text-blue-600">$3K - $20K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Due Reviews</p>
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Total Employees</p>
                <p className="text-2xl font-bold text-purple-600">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Bands */}
      <Card>
        <CardHeader>
          <CardTitle>Salary Bands by Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salaryBands.map((band) => (
              <div key={band.level} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{band.level}</p>
                  <p className="text-sm text-muted-foreground">{band.employees} employees</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${band.minSalary.toLocaleString()} - ${band.maxSalary.toLocaleString()}
                  </p>
                  <div className="w-32 h-2 bg-muted rounded-full mt-1">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${(band.employees / 156) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employee Salary Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Employee Salary Management</CardTitle>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Current Salary</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Last Review</TableHead>
                <TableHead>Next Review</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell className="font-semibold">
                    ${employee.currentSalary.toLocaleString()}
                  </TableCell>
                  <TableCell>{getPerformanceBadge(employee.performance)}</TableCell>
                  <TableCell>{employee.lastReview}</TableCell>
                  <TableCell>{employee.nextReview}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <TrendingUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Salary Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Mass Salary Adjustment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Salary Reviews
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                Update Salary Bands
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Export Salary Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Salary Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-muted-foreground">Merit increase - Engineering</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">+5%</p>
                  <p className="text-xs text-muted-foreground">Mar 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Emily Davis</p>
                  <p className="text-sm text-muted-foreground">Promotion - HR</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">+12%</p>
                  <p className="text-xs text-muted-foreground">Mar 01, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Mike Chen</p>
                  <p className="text-sm text-muted-foreground">Cost of living - Marketing</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">+3%</p>
                  <p className="text-xs text-muted-foreground">Feb 20, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalaryManagement;
