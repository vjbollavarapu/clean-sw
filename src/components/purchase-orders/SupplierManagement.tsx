
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Search, Plus, Building, Phone, Mail, Edit, Eye, Star, MapPin } from 'lucide-react';

const SupplierManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const suppliers = [
    {
      id: 'SUP-001',
      name: 'ChemClean Supplies',
      contact: 'John Smith',
      email: 'john@chemclean.com',
      phone: '+1 (555) 123-4567',
      address: '123 Industrial Ave, Chemical City, CC 12345',
      category: 'Cleaning Supplies',
      status: 'active',
      rating: 4.8,
      totalOrders: 24,
      totalSpent: 58000,
      lastOrder: '2024-06-15',
      paymentTerms: 'Net 30',
      certifications: ['ISO 9001', 'Green Certified']
    },
    {
      id: 'SUP-002',
      name: 'Equipment Masters',
      contact: 'Sarah Johnson',
      email: 'sarah@equipmentmasters.com',
      phone: '+1 (555) 234-5678',
      address: '456 Equipment Blvd, Tool Town, TT 23456',
      category: 'Equipment',
      status: 'active',
      rating: 4.6,
      totalOrders: 18,
      totalSpent: 125000,
      lastOrder: '2024-06-14',
      paymentTerms: 'Net 45',
      certifications: ['ISO 9001', 'CE Certified']
    },
    {
      id: 'SUP-003',
      name: 'Uniform Solutions',
      contact: 'Mike Wilson',
      email: 'mike@uniformsolutions.com',
      phone: '+1 (555) 345-6789',
      address: '789 Textile St, Fabric Falls, FF 34567',
      category: 'Uniforms',
      status: 'active',
      rating: 4.2,
      totalOrders: 12,
      totalSpent: 18000,
      lastOrder: '2024-06-12',
      paymentTerms: 'Net 30',
      certifications: ['OEKO-TEX']
    },
    {
      id: 'SUP-004',
      name: 'Office Plus',
      contact: 'Emily Davis',
      email: 'emily@officeplus.com',
      phone: '+1 (555) 456-7890',
      address: '321 Office Park, Supply City, SC 45678',
      category: 'Office Supplies',
      status: 'active',
      rating: 4.0,
      totalOrders: 35,
      totalSpent: 22000,
      lastOrder: '2024-06-11',
      paymentTerms: 'Net 15',
      certifications: ['FSC Certified']
    },
    {
      id: 'SUP-005',
      name: 'Safety First Inc',
      contact: 'Robert Brown',
      email: 'robert@safetyfirst.com',
      phone: '+1 (555) 567-8901',
      address: '654 Safety Blvd, Protection Point, PP 56789',
      category: 'Safety Equipment',
      status: 'pending',
      rating: 4.5,
      totalOrders: 8,
      totalSpent: 45000,
      lastOrder: '2024-06-10',
      paymentTerms: 'Net 30',
      certifications: ['ANSI Certified', 'OSHA Approved']
    }
  ];

  const categories = Array.from(new Set(suppliers.map(supplier => supplier.category)));

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || supplier.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || supplier.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, label: 'Active' },
      pending: { variant: 'secondary' as const, label: 'Pending' },
      inactive: { variant: 'destructive' as const, label: 'Inactive' },
      suspended: { variant: 'destructive' as const, label: 'Suspended' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Supplier Management
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Supplier
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Suppliers Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Terms</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {supplier.address.split(',')[1]?.trim() || 'N/A'}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{supplier.contact}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {supplier.email}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {supplier.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.category}</TableCell>
                  <TableCell>{getStatusBadge(supplier.status)}</TableCell>
                  <TableCell>{renderRating(supplier.rating)}</TableCell>
                  <TableCell className="text-center">{supplier.totalOrders}</TableCell>
                  <TableCell className="font-medium">{formatCurrency(supplier.totalSpent)}</TableCell>
                  <TableCell>{new Date(supplier.lastOrder).toLocaleDateString()}</TableCell>
                  <TableCell>{supplier.paymentTerms}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Building className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing {filteredSuppliers.length} of {suppliers.length} suppliers</span>
            <span>Total Spent: {formatCurrency(filteredSuppliers.reduce((sum, supplier) => sum + supplier.totalSpent, 0))}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierManagement;
