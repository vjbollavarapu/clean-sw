
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Building, Phone, Mail } from 'lucide-react';

const SupplierOverview: React.FC = () => {
  const suppliers = [
    {
      id: 1,
      name: 'ChemClean Supplies',
      contact: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john@chemclean.com',
      status: 'active',
      lastOrder: '2024-01-15'
    },
    {
      id: 2,
      name: 'Equipment Masters',
      contact: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      email: 'sarah@equipmentmasters.com',
      status: 'active',
      lastOrder: '2024-01-12'
    },
    {
      id: 3,
      name: 'Uniform Solutions',
      contact: 'Mike Wilson',
      phone: '+1 (555) 345-6789',
      email: 'mike@uniformsolutions.com',
      status: 'pending',
      lastOrder: '2024-01-08'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      pending: 'secondary',
      inactive: 'destructive'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          Supplier Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suppliers.map(supplier => (
            <div key={supplier.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{supplier.name}</h4>
                  <p className="text-sm text-muted-foreground">{supplier.contact}</p>
                </div>
                {getStatusBadge(supplier.status)}
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {supplier.phone}
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {supplier.email}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Last Order: {new Date(supplier.lastOrder).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierOverview;
