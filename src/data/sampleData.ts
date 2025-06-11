
import { User, ServiceOrder, Employee, Client, InventoryItem, FinancialRecord } from '../types';

export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'admin@cleaningco.com',
    name: 'John Administrator',
    role: 'Administrator',
    department: 'IT',
    phone: '+1-555-0001',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'manager@cleaningco.com',
    name: 'Sarah Manager',
    role: 'Management',
    department: 'Operations',
    phone: '+1-555-0002',
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '3',
    email: 'hr@cleaningco.com',
    name: 'Mike HR',
    role: 'HR Manager',
    department: 'Human Resources',
    phone: '+1-555-0003',
    isActive: true,
    createdAt: '2024-02-01T00:00:00Z'
  },
  {
    id: '4',
    email: 'employee1@cleaningco.com',
    name: 'Lisa Cleaner',
    role: 'Employee',
    department: 'Field Operations',
    phone: '+1-555-0004',
    isActive: true,
    createdAt: '2024-02-15T00:00:00Z'
  },
  {
    id: '5',
    email: 'client@business.com',
    name: 'Corporate Client',
    role: 'Client',
    phone: '+1-555-0005',
    isActive: true,
    createdAt: '2024-03-01T00:00:00Z'
  },
  {
    id: '6',
    email: 'procurement@cleaningco.com',
    name: 'David Procurement',
    role: 'Procurement',
    department: 'Supply Chain',
    phone: '+1-555-0006',
    isActive: true,
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '7',
    email: 'accounts@cleaningco.com',
    name: 'Emma Accounts',
    role: 'Accounts',
    department: 'Finance',
    phone: '+1-555-0007',
    isActive: true,
    createdAt: '2024-01-10T00:00:00Z'
  }
];

export const sampleServiceOrders: ServiceOrder[] = [
  {
    id: 'SO001',
    clientId: '5',
    clientName: 'Corporate Client',
    serviceType: 'Office Deep Cleaning',
    status: 'in-progress',
    assignedEmployees: ['4'],
    scheduledDate: '2024-06-12T09:00:00Z',
    amount: 1200,
    location: '123 Business Plaza, Floor 5',
    notes: 'Focus on conference rooms and break areas'
  },
  {
    id: 'SO002',
    clientId: 'C002',
    clientName: 'Retail Store Inc',
    serviceType: 'Daily Maintenance',
    status: 'completed',
    assignedEmployees: ['4', 'E002'],
    scheduledDate: '2024-06-11T07:00:00Z',
    completedDate: '2024-06-11T15:00:00Z',
    amount: 800,
    location: '456 Shopping Center',
    notes: 'Regular daily cleaning completed'
  },
  {
    id: 'SO003',
    clientId: 'C003',
    clientName: 'Medical Center',
    serviceType: 'Sanitization',
    status: 'pending',
    assignedEmployees: [],
    scheduledDate: '2024-06-13T06:00:00Z',
    amount: 1500,
    location: '789 Health Plaza',
    notes: 'Requires specialized sanitization equipment'
  }
];

export const sampleEmployees: Employee[] = [
  {
    id: '4',
    name: 'Lisa Cleaner',
    email: 'employee1@cleaningco.com',
    phone: '+1-555-0004',
    position: 'Cleaning Specialist',
    department: 'Field Operations',
    hireDate: '2024-02-15',
    salary: 35000,
    status: 'active'
  },
  {
    id: 'E002',
    name: 'Robert Janitor',
    email: 'robert@cleaningco.com',
    phone: '+1-555-0008',
    position: 'Senior Cleaner',
    department: 'Field Operations',
    hireDate: '2023-08-10',
    salary: 42000,
    status: 'active'
  },
  {
    id: 'E003',
    name: 'Maria Supervisor',
    email: 'maria@cleaningco.com',
    phone: '+1-555-0009',
    position: 'Field Supervisor',
    department: 'Field Operations',
    hireDate: '2023-05-20',
    salary: 55000,
    status: 'active'
  }
];

export const sampleClients: Client[] = [
  {
    id: '5',
    name: 'Corporate Client',
    email: 'client@business.com',
    phone: '+1-555-0005',
    address: '123 Business Plaza, Floor 5',
    serviceHistory: 24,
    totalSpent: 28800,
    status: 'active'
  },
  {
    id: 'C002',
    name: 'Retail Store Inc',
    email: 'manager@retailstore.com',
    phone: '+1-555-1001',
    address: '456 Shopping Center',
    serviceHistory: 156,
    totalSpent: 124800,
    status: 'active'
  },
  {
    id: 'C003',
    name: 'Medical Center',
    email: 'admin@medcenter.com',
    phone: '+1-555-1002',
    address: '789 Health Plaza',
    serviceHistory: 12,
    totalSpent: 18000,
    status: 'active'
  }
];

export const sampleInventory: InventoryItem[] = [
  {
    id: 'INV001',
    name: 'All-Purpose Cleaner',
    category: 'Cleaning Supplies',
    quantity: 45,
    minQuantity: 20,
    unitPrice: 8.99,
    supplier: 'CleanCorp Supplies',
    lastRestocked: '2024-06-01'
  },
  {
    id: 'INV002',
    name: 'Microfiber Cloths',
    category: 'Equipment',
    quantity: 12,
    minQuantity: 25,
    unitPrice: 15.50,
    supplier: 'Professional Equipment Co',
    lastRestocked: '2024-05-28'
  },
  {
    id: 'INV003',
    name: 'Industrial Vacuum Bags',
    category: 'Equipment',
    quantity: 8,
    minQuantity: 15,
    unitPrice: 22.75,
    supplier: 'VacuumPro',
    lastRestocked: '2024-05-25'
  },
  {
    id: 'INV004',
    name: 'Disinfectant Spray',
    category: 'Cleaning Supplies',
    quantity: 67,
    minQuantity: 30,
    unitPrice: 12.99,
    supplier: 'CleanCorp Supplies',
    lastRestocked: '2024-06-05'
  }
];

export const sampleFinancialRecords: FinancialRecord[] = [
  {
    id: 'FIN001',
    type: 'income',
    category: 'Service Revenue',
    amount: 1200,
    description: 'Office Deep Cleaning - Corporate Client',
    date: '2024-06-11',
    reference: 'SO001'
  },
  {
    id: 'FIN002',
    type: 'expense',
    category: 'Supplies',
    amount: 450.50,
    description: 'Monthly cleaning supplies purchase',
    date: '2024-06-01',
    reference: 'PO-2024-001'
  },
  {
    id: 'FIN003',
    type: 'income',
    category: 'Service Revenue',
    amount: 800,
    description: 'Daily Maintenance - Retail Store Inc',
    date: '2024-06-11',
    reference: 'SO002'
  },
  {
    id: 'FIN004',
    type: 'expense',
    category: 'Payroll',
    amount: 8500,
    description: 'Monthly employee salaries',
    date: '2024-06-01'
  },
  {
    id: 'FIN005',
    type: 'expense',
    category: 'Equipment',
    amount: 1200,
    description: 'New vacuum cleaner purchase',
    date: '2024-06-05',
    reference: 'EQ-2024-003'
  }
];
