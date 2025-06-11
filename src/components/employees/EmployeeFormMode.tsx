
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Employee } from '../../types';

interface EmployeeFormModeProps {
  employee: Employee | null;
  mode: 'edit' | 'add';
  onSave: (employee: Employee) => void;
  onClose: () => void;
}

const EmployeeFormMode: React.FC<EmployeeFormModeProps> = ({
  employee,
  mode,
  onSave,
  onClose
}) => {
  const [formData, setFormData] = useState<Partial<Employee>>({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    hireDate: '',
    salary: 0,
    status: 'active'
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        hireDate: '',
        salary: 0,
        status: 'active'
      });
    }
  }, [employee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'add') {
      const newEmployee: Employee = {
        ...formData as Employee,
        id: `EMP${Date.now()}`,
      };
      onSave(newEmployee);
    } else if (mode === 'edit' && employee) {
      onSave({ ...employee, ...formData } as Employee);
    }
    
    onClose();
  };

  const handleInputChange = (field: keyof Employee, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select 
            value={formData.status} 
            onValueChange={(value) => handleInputChange('status', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="on-leave">On Leave</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="position">Position *</Label>
          <Input
            id="position"
            value={formData.position || ''}
            onChange={(e) => handleInputChange('position', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="department">Department *</Label>
          <Select 
            value={formData.department} 
            onValueChange={(value) => handleInputChange('department', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Field Operations">Field Operations</SelectItem>
              <SelectItem value="Human Resources">Human Resources</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Supply Chain">Supply Chain</SelectItem>
              <SelectItem value="Management">Management</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="hireDate">Hire Date *</Label>
          <Input
            id="hireDate"
            type="date"
            value={formData.hireDate || ''}
            onChange={(e) => handleInputChange('hireDate', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="salary">Annual Salary *</Label>
          <Input
            id="salary"
            type="number"
            value={formData.salary || ''}
            onChange={(e) => handleInputChange('salary', parseFloat(e.target.value))}
            required
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {mode === 'add' ? 'Add Employee' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};

export default EmployeeFormMode;
