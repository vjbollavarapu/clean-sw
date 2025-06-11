
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import ContractStats from './ContractStats';
import ContractList from './ContractList';
import ContractForm from './ContractForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { sampleContracts } from '../../data/contractData';

const ContractManagementDashboard = () => {
  const [contracts, setContracts] = useState(sampleContracts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContract, setEditingContract] = useState(null);

  const handleAddContract = (contractData: any) => {
    const newContract = {
      ...contractData,
      id: `CNT-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setContracts([...contracts, newContract]);
    setIsFormOpen(false);
  };

  const handleEditContract = (contract: any) => {
    setEditingContract(contract);
    setIsFormOpen(true);
  };

  const handleUpdateContract = (contractData: any) => {
    setContracts(contracts.map(c => 
      c.id === editingContract?.id 
        ? { ...contractData, id: editingContract.id, updatedAt: new Date().toISOString() }
        : c
    ));
    setIsFormOpen(false);
    setEditingContract(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingContract(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contract Management</h1>
          <p className="text-muted-foreground">
            Manage client contracts, renewals, and track contract status
          </p>
        </div>
        
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingContract(null)}>
              <Plus className="h-4 w-4 mr-2" />
              New Contract
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingContract ? 'Edit Contract' : 'Create New Contract'}
              </DialogTitle>
            </DialogHeader>
            <ContractForm
              contract={editingContract}
              onSubmit={editingContract ? handleUpdateContract : handleAddContract}
              onCancel={handleCloseForm}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ContractStats contracts={contracts} />
      
      <ContractList 
        contracts={contracts} 
        onEdit={handleEditContract}
      />
    </div>
  );
};

export default ContractManagementDashboard;
