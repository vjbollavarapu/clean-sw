
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { 
  Package, 
  Shirt, 
  Wrench, 
  AlertTriangle, 
  CheckCircle,
  Plus,
  Eye,
  Calendar,
  Users
} from 'lucide-react';

const HREquipment = () => {
  const equipmentInventory = [
    {
      id: '1',
      category: 'Cleaning Equipment',
      item: 'Industrial Vacuum Cleaner',
      total: 12,
      assigned: 10,
      maintenance: 1,
      available: 1,
      condition: 'good'
    },
    {
      id: '2',
      category: 'Cleaning Equipment',
      item: 'Floor Scrubber Machine',
      total: 6,
      assigned: 5,
      maintenance: 1,
      available: 0,
      condition: 'fair'
    },
    {
      id: '3',
      category: 'Safety Equipment',
      item: 'Safety Harnesses',
      total: 20,
      assigned: 18,
      maintenance: 0,
      available: 2,
      condition: 'excellent'
    }
  ];

  const uniformDistribution = [
    {
      id: '1',
      employee: 'John Smith',
      size: 'L',
      items: [
        { type: 'Uniform Shirt', quantity: 3, condition: 'good', lastIssued: '2024-03-15' },
        { type: 'Work Pants', quantity: 2, condition: 'good', lastIssued: '2024-03-15' },
        { type: 'Safety Boots', quantity: 1, condition: 'fair', lastIssued: '2024-01-10' }
      ]
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      size: 'M',
      items: [
        { type: 'Uniform Shirt', quantity: 3, condition: 'excellent', lastIssued: '2024-04-01' },
        { type: 'Work Pants', quantity: 3, condition: 'good', lastIssued: '2024-04-01' },
        { type: 'Safety Boots', quantity: 1, condition: 'good', lastIssued: '2024-02-15' }
      ]
    }
  ];

  const maintenanceSchedule = [
    {
      id: '1',
      equipment: 'Floor Scrubber #3',
      type: 'Routine Maintenance',
      scheduledDate: '2024-06-15',
      technician: 'Mike Thompson',
      status: 'scheduled',
      estimatedHours: 2
    },
    {
      id: '2',
      equipment: 'Vacuum Cleaner #7',
      type: 'Repair',
      scheduledDate: '2024-06-12',
      technician: 'Lisa Chen',
      status: 'in-progress',
      estimatedHours: 4
    },
    {
      id: '3',
      equipment: 'Safety Equipment Inspection',
      type: 'Safety Inspection',
      scheduledDate: '2024-06-20',
      technician: 'David Wilson',
      status: 'pending',
      estimatedHours: 6
    }
  ];

  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case 'excellent':
        return <Badge variant="default">Excellent</Badge>;
      case 'good':
        return <Badge className="bg-green-100 text-green-800">Good</Badge>;
      case 'fair':
        return <Badge variant="outline">Fair</Badge>;
      case 'poor':
        return <Badge variant="destructive">Poor</Badge>;
      default:
        return <Badge variant="secondary">{condition}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="outline">Scheduled</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'completed':
        return <Badge variant="default">Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Equipment Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Equipment</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Use</p>
                <p className="text-2xl font-bold">142</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Under Maintenance</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Wrench className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Need Replacement</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Equipment & Uniform Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="equipment" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="equipment">Equipment Inventory</TabsTrigger>
              <TabsTrigger value="uniforms">Uniform Distribution</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="equipment">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Equipment Inventory</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Equipment
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Assigned</TableHead>
                      <TableHead>Maintenance</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipmentInventory.map((equipment) => (
                      <TableRow key={equipment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{equipment.item}</p>
                            <p className="text-sm text-muted-foreground">{equipment.category}</p>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{equipment.total}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{equipment.assigned}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Wrench className="h-4 w-4 text-orange-600" />
                            <span>{equipment.maintenance}</span>
                          </div>
                        </TableCell>
                        <TableCell>{equipment.available}</TableCell>
                        <TableCell>{getConditionBadge(equipment.condition)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="uniforms">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Uniform Distribution</h3>
                  <Button size="sm">
                    <Shirt className="h-4 w-4 mr-2" />
                    Issue Uniforms
                  </Button>
                </div>
                <div className="space-y-4">
                  {uniformDistribution.map((employee) => (
                    <Card key={employee.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{employee.employee}</h4>
                            <p className="text-sm text-muted-foreground">Size: {employee.size}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                        <div className="grid gap-3 md:grid-cols-3">
                          {employee.items.map((item, index) => (
                            <div key={index} className="border rounded-lg p-3">
                              <div className="flex justify-between items-start mb-2">
                                <p className="font-medium text-sm">{item.type}</p>
                                {getConditionBadge(item.condition)}
                              </div>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <p>Quantity: {item.quantity}</p>
                                <p>Last Issued: {item.lastIssued}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Maintenance Schedule</h3>
                  <Button size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Maintenance
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Scheduled Date</TableHead>
                      <TableHead>Technician</TableHead>
                      <TableHead>Est. Hours</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceSchedule.map((maintenance) => (
                      <TableRow key={maintenance.id}>
                        <TableCell className="font-medium">{maintenance.equipment}</TableCell>
                        <TableCell>{maintenance.type}</TableCell>
                        <TableCell>{maintenance.scheduledDate}</TableCell>
                        <TableCell>{maintenance.technician}</TableCell>
                        <TableCell>{maintenance.estimatedHours}h</TableCell>
                        <TableCell>{getStatusBadge(maintenance.status)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HREquipment;
