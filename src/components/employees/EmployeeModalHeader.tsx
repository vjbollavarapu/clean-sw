
import React from 'react';
import { Button } from '../ui/button';
import { CardHeader, CardTitle } from '../ui/card';
import { X } from 'lucide-react';

interface EmployeeModalHeaderProps {
  mode: 'view' | 'edit' | 'add';
  onClose: () => void;
}

const EmployeeModalHeader: React.FC<EmployeeModalHeaderProps> = ({ mode, onClose }) => {
  const getTitle = () => {
    switch (mode) {
      case 'add': return 'Add New Employee';
      case 'edit': return 'Edit Employee';
      case 'view': return 'Employee Details';
      default: return 'Employee';
    }
  };

  return (
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
      <CardTitle>{getTitle()}</CardTitle>
      <Button variant="ghost" size="sm" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </CardHeader>
  );
};

export default EmployeeModalHeader;
