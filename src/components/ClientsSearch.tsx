
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface ClientsSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ClientsSearch: React.FC<ClientsSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search clients..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-8"
      />
    </div>
  );
};

export default ClientsSearch;
