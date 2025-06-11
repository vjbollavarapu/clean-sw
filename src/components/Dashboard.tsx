
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from './dashboard/AdminDashboard';
import ManagementDashboard from './dashboard/ManagementDashboard';
import HRDashboard from './dashboard/HRDashboard';
import EmployeeDashboard from './dashboard/EmployeeDashboard';
import ClientDashboard from './dashboard/ClientDashboard';
import ProcurementDashboard from './dashboard/ProcurementDashboard';
import AccountsDashboard from './dashboard/AccountsDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const getDashboardContent = () => {
    switch (user.role) {
      case 'Administrator':
        return <AdminDashboard />;
      case 'Management':
        return <ManagementDashboard />;
      case 'HR Manager':
        return <HRDashboard />;
      case 'Employee':
        return <EmployeeDashboard user={user} />;
      case 'Client':
        return <ClientDashboard user={user} />;
      case 'Procurement':
        return <ProcurementDashboard />;
      case 'Accounts':
        return <AccountsDashboard />;
      default:
        return <div>Welcome to the ERP System</div>;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, {user.name}
        </h1>
        <p className="text-muted-foreground">{user.role} Dashboard</p>
      </div>
      {getDashboardContent()}
    </div>
  );
};

export default Dashboard;
