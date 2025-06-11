
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { sampleInventory } from '../data/sampleData';
import { InventoryItem } from '../types';
import InventorySearch from '../components/InventorySearch';
import InventoryFilters from '../components/InventoryFilters';
import InventoryTable from '../components/InventoryTable';
import InventoryStats from '../components/InventoryStats';
import InventoryModal from '../components/InventoryModal';

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(sampleInventory);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('add');

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    let matchesStatus = true;
    if (statusFilter === 'low-stock') {
      matchesStatus = item.quantity <= item.minQuantity;
    } else if (statusFilter === 'in-stock') {
      matchesStatus = item.quantity > item.minQuantity;
    } else if (statusFilter === 'out-of-stock') {
      matchesStatus = item.quantity === 0;
    }
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleAddItem = () => {
    setSelectedItem(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleEditItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleViewItem = (item: InventoryItem) => {
    setSelectedItem(item);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleDeleteItem = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  const handleSaveItem = (itemData: Omit<InventoryItem, 'id'>) => {
    if (modalMode === 'add') {
      const newItem: InventoryItem = {
        ...itemData,
        id: `INV${String(inventory.length + 1).padStart(3, '0')}`
      };
      setInventory(prev => [...prev, newItem]);
    } else if (modalMode === 'edit' && selectedItem) {
      setInventory(prev => 
        prev.map(item => 
          item.id === selectedItem.id 
            ? { ...itemData, id: selectedItem.id }
            : item
        )
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <Button onClick={handleAddItem}>
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <InventoryStats inventory={inventory} />

      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <InventorySearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <InventoryFilters
              categoryFilter={categoryFilter}
              statusFilter={statusFilter}
              onCategoryChange={setCategoryFilter}
              onStatusChange={setStatusFilter}
              inventory={inventory}
            />
          </div>

          <InventoryTable
            inventory={filteredInventory}
            onEdit={handleEditItem}
            onView={handleViewItem}
            onDelete={handleDeleteItem}
          />
        </CardContent>
      </Card>

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveItem}
        item={selectedItem}
        mode={modalMode}
      />
    </div>
  );
};

export default Inventory;
