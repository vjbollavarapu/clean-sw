
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { 
  Home, 
  Users, 
  ClipboardList, 
  Package, 
  DollarSign, 
  UserCheck, 
  Building, 
  ShoppingCart,
  LogOut,
  Settings
} from 'lucide-react';

const Navigation = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const getNavigationItems = () => {
    const baseItems = [
      { icon: Home, label: 'Dashboard', path: '/dashboard' }
    ];

    switch (user.role) {
      case 'Administrator':
        return [
          ...baseItems,
          { icon: Users, label: 'User Management', path: '/users' },
          { icon: ClipboardList, label: 'Service Orders', path: '/orders' },
          { icon: Package, label: 'Inventory', path: '/inventory' },
          { icon: DollarSign, label: 'Financial Reports', path: '/financial' },
          { icon: Settings, label: 'System Settings', path: '/settings' }
        ];
      
      case 'Management':
        return [
          ...baseItems,
          { icon: ClipboardList, label: 'Service Orders', path: '/orders' },
          { icon: Users, label: 'Employees', path: '/employees' },
          { icon: Building, label: 'Clients', path: '/clients' },
          { icon: DollarSign, label: 'Reports', path: '/reports' }
        ];
      
      case 'HR Manager':
        return [
          ...baseItems,
          { icon: Users, label: 'Employee Management', path: '/employees' },
          { icon: UserCheck, label: 'Attendance', path: '/attendance' },
          { icon: DollarSign, label: 'Payroll', path: '/payroll' }
        ];
      
      case 'Employee':
        return [
          ...baseItems,
          { icon: ClipboardList, label: 'My Tasks', path: '/tasks' },
          { icon: UserCheck, label: 'Time Tracking', path: '/timesheet' }
        ];
      
      case 'Client':
        return [
          ...baseItems,
          { icon: ClipboardList, label: 'Service History', path: '/services' },
          { icon: DollarSign, label: 'Billing', path: '/billing' }
        ];
      
      case 'Procurement':
        return [
          ...baseItems,
          { icon: Package, label: 'Inventory', path: '/inventory' },
          { icon: ShoppingCart, label: 'Purchase Orders', path: '/purchase-orders' },
          { icon: Building, label: 'Suppliers', path: '/suppliers' }
        ];
      
      case 'Accounts':
        return [
          ...baseItems,
          { icon: DollarSign, label: 'Financial Dashboard', path: '/financial' },
          { icon: ClipboardList, label: 'Invoices', path: '/invoices' },
          { icon: Building, label: 'Client Billing', path: '/billing' }
        ];
      
      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-card border-r border-border h-screen w-64 p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-foreground">CleanCorp ERP</h1>
        <p className="text-sm text-muted-foreground">{user.role}</p>
      </div>
      
      <div className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === '/orders' && location.pathname.startsWith('/orders'));
          
          return (
            <Button
              key={item.path}
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link to={item.path}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </div>
      
      <div className="border-t border-border pt-4 space-y-2">
        <div className="text-sm text-muted-foreground px-2">
          <p className="font-medium">{user.name}</p>
          <p>{user.email}</p>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
