
import React, { useState, useMemo } from 'react';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { FinancialRecord } from '../types';
import { sampleFinancialRecords } from '../data/sampleData';
import FinancialSearch from '../components/FinancialSearch';
import FinancialFilters from '../components/FinancialFilters';
import FinancialStats from '../components/FinancialStats';
import FinancialTable from '../components/FinancialTable';
import FinancialModal from '../components/FinancialModal';

const Financial = () => {
  const [financialRecords, setFinancialRecords] = useState<FinancialRecord[]>(sampleFinancialRecords);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<FinancialRecord | null>(null);

  const filteredRecords = useMemo(() => {
    return financialRecords.filter(record => {
      const matchesSearch = 
        record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.reference?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = typeFilter === 'all' || record.type === typeFilter;
      const matchesCategory = categoryFilter === 'all' || record.category === categoryFilter;
      
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [financialRecords, searchTerm, typeFilter, categoryFilter]);

  const handleAddRecord = () => {
    setSelectedRecord(null);
    setIsModalOpen(true);
  };

  const handleEditRecord = (record: FinancialRecord) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleDeleteRecord = (id: string) => {
    setFinancialRecords(prev => prev.filter(record => record.id !== id));
  };

  const handleSaveRecord = (recordData: Omit<FinancialRecord, 'id'>) => {
    if (selectedRecord) {
      // Edit existing record
      setFinancialRecords(prev => 
        prev.map(record => 
          record.id === selectedRecord.id 
            ? { ...recordData, id: selectedRecord.id }
            : record
        )
      );
    } else {
      // Add new record
      const newRecord: FinancialRecord = {
        ...recordData,
        id: Date.now().toString(),
      };
      setFinancialRecords(prev => [...prev, newRecord]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Records</h1>
          <p className="text-muted-foreground">Manage income and expense records</p>
        </div>
        <Button onClick={handleAddRecord}>
          <Plus className="w-4 h-4 mr-2" />
          Add Record
        </Button>
      </div>

      <FinancialStats records={filteredRecords} />

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <FinancialSearch 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <FinancialFilters
          typeFilter={typeFilter}
          categoryFilter={categoryFilter}
          onTypeChange={setTypeFilter}
          onCategoryChange={setCategoryFilter}
          records={financialRecords}
        />
      </div>

      <FinancialTable 
        records={filteredRecords}
        onEdit={handleEditRecord}
        onDelete={handleDeleteRecord}
      />

      <FinancialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRecord}
        record={selectedRecord}
      />
    </div>
  );
};

export default Financial;
