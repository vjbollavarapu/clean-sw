
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  phone?: string;
  avatar?: string;
  isActive: boolean;
  createdAt: string;
}

export type UserRole = 
  | 'Administrator' 
  | 'Management' 
  | 'HR Manager' 
  | 'Employee' 
  | 'Client' 
  | 'Procurement' 
  | 'Accounts';

export interface ServiceOrder {
  id: string;
  clientId: string;
  clientName: string;
  serviceType: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  assignedEmployees: string[];
  scheduledDate: string;
  completedDate?: string;
  amount: number;
  location: string;
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'on-leave';
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceHistory: number;
  totalSpent: number;
  status: 'active' | 'inactive';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  unitPrice: number;
  supplier: string;
  lastRestocked: string;
}

export interface FinancialRecord {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: string;
  reference?: string;
}

export interface Contract {
  id: string;
  contractNumber: string;
  clientId: string;
  clientName: string;
  serviceType: string;
  startDate: string;
  endDate: string;
  monthlyValue: number;
  totalValue: number;
  status: 'active' | 'expired' | 'pending' | 'cancelled';
  locations: string[];
  assignedCleaners: number;
  autoRenewal: boolean;
  renewalNotice: number; // days before expiry
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
