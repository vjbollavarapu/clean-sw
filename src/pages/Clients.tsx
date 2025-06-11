
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus } from 'lucide-react';
import { sampleClients } from '../data/sampleData';
import { Client } from '../types';
import ClientModal from '../components/ClientModal';
import ClientsStats from '../components/ClientsStats';
import ClientsSearch from '../components/ClientsSearch';
import ClientsTable from '../components/ClientsTable';

const Clients = () => {
  const { user } = useAuth();
  const [clients, setClients] = useState<Client[]>(sampleClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'view' | 'edit' | 'add'>('view');

  // Filter clients based on search term
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if user has permission to manage clients
  const canManageClients = user?.role === 'Administrator' || user?.role === 'Management' || user?.role === 'Accounts';

  const handleAddClient = () => {
    setSelectedClient(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleDeleteClient = (clientId: string) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== clientId));
    }
  };

  const handleSaveClient = (client: Client) => {
    if (modalMode === 'add') {
      setClients([...clients, client]);
    } else if (modalMode === 'edit') {
      setClients(clients.map(c => c.id === client.id ? client : c));
    }
  };

  if (!canManageClients) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">You don't have permission to access client management.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Client Management</h1>
          <p className="text-muted-foreground">Manage company clients and their information</p>
        </div>
        <Button onClick={handleAddClient}>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <ClientsStats clients={clients} />

      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <ClientsSearch 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
          </div>

          <ClientsTable
            clients={filteredClients}
            onViewClient={handleViewClient}
            onEditClient={handleEditClient}
            onDeleteClient={handleDeleteClient}
          />
        </CardContent>
      </Card>

      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={selectedClient}
        mode={modalMode}
        onSave={handleSaveClient}
      />
    </div>
  );
};

export default Clients;
