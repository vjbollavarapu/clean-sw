
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Employee } from '../types';
import EmployeeModalHeader from './employees/EmployeeModalHeader';
import EmployeeViewMode from './employees/EmployeeViewMode';
import EmployeeFormMode from './employees/EmployeeFormMode';

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee | null;
  mode: 'view' | 'edit' | 'add';
  onSave: (employee: Employee) => void;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({
  isOpen,
  onClose,
  employee,
  mode,
  onSave
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <EmployeeModalHeader mode={mode} onClose={onClose} />
          
          <CardContent>
            {mode === 'view' && employee ? (
              <EmployeeViewMode employee={employee} />
            ) : (
              <EmployeeFormMode
                employee={employee}
                mode={mode as 'edit' | 'add'}
                onSave={onSave}
                onClose={onClose}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeModal;
