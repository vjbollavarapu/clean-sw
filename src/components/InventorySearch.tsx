
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface InventorySearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const InventorySearch: React.FC<InventorySearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search inventory items..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-8"
      />
    </div>
  );
};

export default InventorySearch;
