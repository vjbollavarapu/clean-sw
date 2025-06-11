import { User, ServiceOrder, Employee, Client, InventoryItem, FinancialRecord } from '../types';

export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'admin@cleaningco.com',
    name: 'John Admin',
    role: 'Administrator',
    department: 'IT',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    email: 'manager@cleaningco.com',
    name: 'Sarah Manager',
    role: 'Management',
    department: 'Operations',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-16T09:30:00Z'
  },
  {
    id: '3',
    email: 'hr@cleaningco.com',
    name: 'Mike HR',
    role: 'HR Manager',
    department: 'Human Resources',
    phone: '+1 (555) 345-6789',
    isActive: true,
    createdAt: '2024-01-17T11:15:00Z'
  },
  {
    id: '4',
    email: 'employee1@cleaningco.com',
    name: 'Alice Employee',
    role: 'Employee',
    department: 'Operations',
    phone: '+1 (555) 456-7890',
    isActive: true,
    createdAt: '2024-01-18T08:00:00Z'
  },
  {
    id: '5',
    email: 'client@business.com',
    name: 'Business Client',
    role: 'Client',
    department: 'External',
    phone: '+1 (555) 567-8901',
    isActive: true,
    createdAt: '2024-01-19T10:30:00Z'
  },
  {
    id: '6',
    email: 'procurement@cleaningco.com',
    name: 'Procurement Manager',
    role: 'Procurement',
    department: 'Procurement',
    phone: '+1 (555) 678-9012',
    isActive: true,
    createdAt: '2024-01-20T09:00:00Z'
  },
  {
    id: '7',
    email: 'accounts@cleaningco.com',
    name: 'Accounts Manager',
    role: 'Accounts',
    department: 'Finance',
    phone: '+1 (555) 789-0123',
    isActive: true,
    createdAt: '2024-01-21T11:00:00Z'
  }
];

export const sampleServiceOrders: ServiceOrder[] = [
  {
    id: '1',
    clientId: '1',
    clientName: 'ABC Corporation',
    serviceType: 'Office Cleaning',
    status: 'pending',
    assignedEmployees: ['1', '2'],
    scheduledDate: '2024-06-15T09:00:00Z',
    amount: 250,
    location: '123 Business Ave, Suite 100',
    notes: 'Regular weekly cleaning service'
  },
  {
    id: '2',
    clientId: '2',
    clientName: 'XYZ Industries',
    serviceType: 'Deep Cleaning',
    status: 'in-progress',
    assignedEmployees: ['3'],
    scheduledDate: '2024-06-14T08:00:00Z',
    amount: 500,
    location: '456 Industrial Blvd',
    notes: 'Post-construction cleanup required'
  }
];

export const sampleEmployees: Employee[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@cleancorp.com',
    phone: '+1 (555) 111-2222',
    position: 'Senior Cleaner',
    department: 'Operations',
    hireDate: '2023-03-15',
    salary: 45000,
    status: 'active'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@cleancorp.com',
    phone: '+1 (555) 333-4444',
    position: 'Cleaning Specialist',
    department: 'Operations',
    hireDate: '2023-06-01',
    salary: 40000,
    status: 'active'
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@cleancorp.com',
    phone: '+1 (555) 555-6666',
    position: 'Team Lead',
    department: 'Operations',
    hireDate: '2022-09-10',
    salary: 55000,
    status: 'active'
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@cleancorp.com',
    phone: '+1 (555) 777-8888',
    position: 'Equipment Technician',
    department: 'Maintenance',
    hireDate: '2023-01-20',
    salary: 42000,
    status: 'on-leave'
  }
];

export const sampleClients: Client[] = [
  {
    id: '1',
    name: 'ABC Corporation',
    email: 'contact@abccorp.com',
    phone: '+1 (555) 100-1000',
    address: '123 Business Ave, Suite 100, Business City, BC 12345',
    serviceHistory: 24,
    totalSpent: 6000,
    status: 'active'
  },
  {
    id: '2',
    name: 'XYZ Industries',
    email: 'info@xyzind.com',
    phone: '+1 (555) 200-2000',
    address: '456 Industrial Blvd, Manufacturing District, MD 23456',
    serviceHistory: 12,
    totalSpent: 3600,
    status: 'active'
  },
  {
    id: '3',
    name: 'Tech Startup Inc.',
    email: 'hello@techstartup.com',
    phone: '+1 (555) 300-3000',
    address: '789 Innovation Way, Tech Hub, TH 34567',
    serviceHistory: 8,
    totalSpent: 2400,
    status: 'active'
  },
  {
    id: '4',
    name: 'Retail Solutions LLC',
    email: 'support@retailsol.com',
    phone: '+1 (555) 400-4000',
    address: '321 Commerce Street, Retail Plaza, RP 45678',
    serviceHistory: 6,
    totalSpent: 1800,
    status: 'inactive'
  }
];

export const sampleInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'All-Purpose Cleaner',
    category: 'Cleaning Supplies',
    quantity: 45,
    minQuantity: 20,
    unitPrice: 8.99,
    supplier: 'CleanCo Distributors',
    lastRestocked: '2024-06-01'
  },
  {
    id: '2',
    name: 'Microfiber Cloths',
    category: 'Cleaning Tools',
    quantity: 12,
    minQuantity: 25,
    unitPrice: 15.50,
    supplier: 'Professional Supplies Inc',
    lastRestocked: '2024-05-28'
  },
  {
    id: '3',
    name: 'Industrial Vacuum Bags',
    category: 'Equipment Parts',
    quantity: 0,
    minQuantity: 10,
    unitPrice: 24.99,
    supplier: 'Equipment Plus',
    lastRestocked: '2024-05-15'
  },
  {
    id: '4',
    name: 'Floor Mop System',
    category: 'Cleaning Tools',
    quantity: 8,
    minQuantity: 5,
    unitPrice: 35.00,
    supplier: 'Professional Supplies Inc',
    lastRestocked: '2024-06-03'
  },
  {
    id: '5',
    name: 'Disinfectant Spray',
    category: 'Cleaning Supplies',
    quantity: 32,
    minQuantity: 15,
    unitPrice: 12.75,
    supplier: 'CleanCo Distributors',
    lastRestocked: '2024-06-05'
  }
];

export const sampleFinancialRecords: FinancialRecord[] = [
  {
    id: '1',
    type: 'income',
    category: 'Service Revenue',
    amount: 2500.00,
    description: 'Weekly cleaning services for ABC Corporation',
    date: '2024-06-10',
    reference: 'INV-2024-001'
  },
  {
    id: '2',
    type: 'income',
    category: 'Service Revenue',
    amount: 1800.00,
    description: 'Deep cleaning service for XYZ Industries',
    date: '2024-06-09',
    reference: 'INV-2024-002'
  },
  {
    id: '3',
    type: 'expense',
    category: 'Office Supplies',
    amount: 450.00,
    description: 'Cleaning supplies and equipment purchase',
    date: '2024-06-08',
    reference: 'PO-2024-015'
  },
  {
    id: '4',
    type: 'expense',
    category: 'Payroll',
    amount: 3200.00,
    description: 'Employee salaries - June 2024',
    date: '2024-06-07',
    reference: 'PAY-2024-06'
  },
  {
    id: '5',
    type: 'income',
    category: 'Consulting',
    amount: 750.00,
    description: 'Cleaning consultation for new client',
    date: '2024-06-06',
    reference: 'CON-2024-003'
  },
  {
    id: '6',
    type: 'expense',
    category: 'Equipment',
    amount: 1200.00,
    description: 'New commercial vacuum cleaner',
    date: '2024-06-05',
    reference: 'EQ-2024-008'
  },
  {
    id: '7',
    type: 'expense',
    category: 'Utilities',
    amount: 320.00,
    description: 'Office electricity and water bill',
    date: '2024-06-04',
    reference: 'UTIL-2024-06'
  },
  {
    id: '8',
    type: 'income',
    category: 'Service Revenue',
    amount: 950.00,
    description: 'Monthly cleaning contract - Tech Startup Inc',
    date: '2024-06-03',
    reference: 'INV-2024-004'
  }
];
