
import React from 'react';
import { Button } from '../ui/button';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { Employee } from '../../types';

interface EmployeeActionsProps {
  employee: Employee;
  onView: (employee: Employee) => void;
  onEdit: (employee: Employee) => void;
  onDelete: (employeeId: string) => void;
}

const EmployeeActions: React.FC<EmployeeActionsProps> = ({ 
  employee, 
  onView, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="flex justify-end space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onView(employee)}
      >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(employee)}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(employee.id)}
        className="text-destructive hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EmployeeActions;
