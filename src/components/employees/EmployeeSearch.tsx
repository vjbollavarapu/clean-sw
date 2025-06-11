
import React from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

interface EmployeeSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-8"
        />
      </div>
    </div>
  );
};

export default EmployeeSearch;
