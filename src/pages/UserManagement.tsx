
import React from 'react';
import AdminUserManagement from '../components/AdminUserManagement';

const UserManagement = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground">Manage system users, roles, and permissions</p>
      </div>
      <AdminUserManagement />
    </div>
  );
};

export default UserManagement;
