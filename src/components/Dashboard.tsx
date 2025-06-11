import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import AdminSystemMonitoring from './AdminSystemMonitoring';
import AdminUserManagement from './AdminUserManagement';
import { 
  sampleServiceOrders, 
  sampleEmployees, 
  sampleClients, 
  sampleInventory, 
  sampleFinancialRecords 
} from '../data/sampleData';
import { Monitor, Users, Settings, BarChart3 } from 'lucide-react';

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

const AdminDashboard = () => {
  const totalOrders = sampleServiceOrders.length;
  const activeEmployees = sampleEmployees.filter(e => e.status === 'active').length;
  const activeClients = sampleClients.filter(c => c.status === 'active').length;
  const lowStockItems = sampleInventory.filter(i => i.quantity <= i.minQuantity).length;

  return (
    <div className="space-y-6">
      {/* Quick Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">Active service orders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
            <p className="text-xs text-muted-foreground">Currently employed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
            <p className="text-xs text-muted-foreground">Current client base</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">Items need restocking</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Admin Monitoring Tabs */}
      <Tabs defaultValue="system" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            System Monitoring
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            System Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <AdminSystemMonitoring />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <AdminUserManagement />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Analytics</CardTitle>
              <CardDescription>Detailed system performance and usage analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced analytics dashboard coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Manage system-wide settings and configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">System settings panel coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ManagementDashboard = () => {
  const ordersInProgress = sampleServiceOrders.filter(o => o.status === 'in-progress').length;
  const pendingOrders = sampleServiceOrders.filter(o => o.status === 'pending').length;
  const monthlyRevenue = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Orders in Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ordersInProgress}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Service Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleServiceOrders.slice(0, 3).map(order => (
              <div key={order.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{order.clientName}</p>
                  <p className="text-sm text-muted-foreground">{order.serviceType}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const HRDashboard = () => {
  const totalEmployees = sampleEmployees.length;
  const averageSalary = sampleEmployees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Employee Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Employees:</span>
              <span className="font-bold">{totalEmployees}</span>
            </div>
            <div className="flex justify-between">
              <span>Average Salary:</span>
              <span className="font-bold">${averageSalary.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleEmployees.map(employee => (
              <div key={employee.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{employee.name}</p>
                  <p className="text-sm text-muted-foreground">{employee.position}</p>
                </div>
                <span className="text-sm">${employee.salary.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EmployeeDashboard = ({ user }: { user: any }) => {
  const myTasks = sampleServiceOrders.filter(order => 
    order.assignedEmployees.includes(user.id)
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Assigned Tasks</CardTitle>
          <CardDescription>Current service orders assigned to you</CardDescription>
        </CardHeader>
        <CardContent>
          {myTasks.length > 0 ? (
            <div className="space-y-2">
              {myTasks.map(task => (
                <div key={task.id} className="p-4 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{task.serviceType}</h4>
                      <p className="text-sm text-muted-foreground">{task.clientName}</p>
                      <p className="text-sm text-muted-foreground">{task.location}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No tasks assigned currently.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const ClientDashboard = ({ user }: { user: any }) => {
  const myOrders = sampleServiceOrders.filter(order => order.clientId === user.id);
  const clientData = sampleClients.find(c => c.id === user.id);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {clientData && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Services:</span>
                  <span className="font-bold">{clientData.serviceHistory}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Spent:</span>
                  <span className="font-bold">${clientData.totalSpent.toLocaleString()}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {myOrders.map(order => (
                <div key={order.id} className="p-2 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{order.serviceType}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.scheduledDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="font-bold">${order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProcurementDashboard = () => {
  const lowStockItems = sampleInventory.filter(item => item.quantity <= item.minQuantity);
  const totalInventoryValue = sampleInventory.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span className="font-bold">{sampleInventory.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Low Stock Items:</span>
                <span className="font-bold text-destructive">{lowStockItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Value:</span>
                <span className="font-bold">${totalInventoryValue.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockItems.map(item => (
                <div key={item.id} className="p-2 border rounded bg-destructive/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <span className="text-destructive font-bold">
                      {item.quantity}/{item.minQuantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AccountsDashboard = () => {
  const monthlyIncome = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const monthlyExpenses = sampleFinancialRecords
    .filter(r => r.type === 'expense' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const netProfit = monthlyIncome - monthlyExpenses;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${monthlyIncome.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${monthlyExpenses.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${netProfit.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleFinancialRecords.slice(0, 5).map(record => (
              <div key={record.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{record.description}</p>
                  <p className="text-sm text-muted-foreground">{record.category}</p>
                </div>
                <span className={`font-bold ${
                  record.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {record.type === 'income' ? '+' : '-'}${record.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
