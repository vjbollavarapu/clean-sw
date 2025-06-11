
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { InventoryItem } from '../types';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Omit<InventoryItem, 'id'>) => void;
  item: InventoryItem | null;
  mode: 'add' | 'edit' | 'view';
}

const InventoryModal: React.FC<InventoryModalProps> = ({
  isOpen,
  onClose,
  onSave,
  item,
  mode
}) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: 0,
    minQuantity: 0,
    unitPrice: 0,
    supplier: '',
    lastRestocked: ''
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        minQuantity: item.minQuantity,
        unitPrice: item.unitPrice,
        supplier: item.supplier,
        lastRestocked: item.lastRestocked
      });
    } else {
      setFormData({
        name: '',
        category: '',
        quantity: 0,
        minQuantity: 0,
        unitPrice: 0,
        supplier: '',
        lastRestocked: new Date().toISOString().split('T')[0]
      });
    }
  }, [item, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getTitle = () => {
    switch (mode) {
      case 'add': return 'Add New Inventory Item';
      case 'edit': return 'Edit Inventory Item';
      case 'view': return 'View Inventory Item';
      default: return 'Inventory Item';
    }
  };

  const isReadOnly = mode === 'view';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Item Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                readOnly={isReadOnly}
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleInputChange('category', value)}
                disabled={isReadOnly}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cleaning Supplies">Cleaning Supplies</SelectItem>
                  <SelectItem value="Equipment">Equipment</SelectItem>
                  <SelectItem value="Safety Gear">Safety Gear</SelectItem>
                  <SelectItem value="Tools">Tools</SelectItem>
                  <SelectItem value="Chemicals">Chemicals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quantity">Current Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 0)}
                min="0"
                required
                readOnly={isReadOnly}
              />
            </div>
            
            <div>
              <Label htmlFor="minQuantity">Minimum Quantity</Label>
              <Input
                id="minQuantity"
                type="number"
                value={formData.minQuantity}
                onChange={(e) => handleInputChange('minQuantity', parseInt(e.target.value) || 0)}
                min="0"
                required
                readOnly={isReadOnly}
              />
            </div>
            
            <div>
              <Label htmlFor="unitPrice">Unit Price</Label>
              <Input
                id="unitPrice"
                type="number"
                step="0.01"
                value={formData.unitPrice}
                onChange={(e) => handleInputChange('unitPrice', parseFloat(e.target.value) || 0)}
                min="0"
                required
                readOnly={isReadOnly}
              />
            </div>
            
            <div>
              <Label htmlFor="supplier">Supplier</Label>
              <Input
                id="supplier"
                value={formData.supplier}
                onChange={(e) => handleInputChange('supplier', e.target.value)}
                required
                readOnly={isReadOnly}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="lastRestocked">Last Restocked</Label>
            <Input
              id="lastRestocked"
              type="date"
              value={formData.lastRestocked}
              onChange={(e) => handleInputChange('lastRestocked', e.target.value)}
              required
              readOnly={isReadOnly}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              {isReadOnly ? 'Close' : 'Cancel'}
            </Button>
            {!isReadOnly && (
              <Button type="submit">
                {mode === 'add' ? 'Add Item' : 'Save Changes'}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InventoryModal;
