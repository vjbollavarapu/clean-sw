
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { 
  Shield, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  Clock,
  Plus,
  Eye,
  TrendingDown,
  Users
} from 'lucide-react';

const HRSafety = () => {
  const safetyIncidents = [
    {
      id: '1',
      date: '2024-06-10',
      employee: 'John Smith',
      location: 'Office Complex A',
      type: 'Minor Injury',
      description: 'Cut on hand while handling broken glass',
      severity: 'low',
      status: 'closed',
      actionsTaken: 'First aid provided, safety briefing conducted'
    },
    {
      id: '2',
      date: '2024-06-08',
      employee: 'Sarah Johnson',
      location: 'Warehouse B',
      type: 'Chemical Exposure',
      description: 'Accidental contact with cleaning chemical',
      severity: 'medium',
      status: 'investigating',
      actionsTaken: 'Medical evaluation, reviewing safety protocols'
    },
    {
      id: '3',
      date: '2024-06-05',
      employee: 'Mike Chen',
      location: 'Retail Store C',
      type: 'Slip and Fall',
      description: 'Slipped on wet floor, no injuries',
      severity: 'low',
      status: 'closed',
      actionsTaken: 'Additional wet floor signage installed'
    }
  ];

  const safetyTraining = [
    {
      id: '1',
      course: 'Chemical Safety Handling',
      required: true,
      employees: 45,
      completed: 42,
      dueDate: '2024-07-15',
      compliance: 93
    },
    {
      id: '2',
      course: 'Equipment Operation Safety',
      required: true,
      employees: 38,
      completed: 35,
      dueDate: '2024-08-01',
      compliance: 92
    },
    {
      id: '3',
      course: 'Emergency Procedures',
      required: true,
      employees: 50,
      completed: 48,
      dueDate: '2024-06-30',
      compliance: 96
    }
  ];

  const safetyEquipment = [
    {
      id: '1',
      item: 'Safety Gloves',
      assigned: 45,
      condition: 'good',
      lastInspection: '2024-06-01',
      nextInspection: '2024-09-01'
    },
    {
      id: '2',
      item: 'Safety Goggles',
      assigned: 32,
      condition: 'fair',
      lastInspection: '2024-05-15',
      nextInspection: '2024-08-15'
    },
    {
      id: '3',
      item: 'Back Support Belts',
      assigned: 28,
      condition: 'excellent',
      lastInspection: '2024-06-05',
      nextInspection: '2024-09-05'
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      case 'medium':
        return <Badge className="bg-orange-100 text-orange-800">Medium</Badge>;
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'closed':
        return <Badge variant="default">Closed</Badge>;
      case 'investigating':
        return <Badge variant="outline">Investigating</Badge>;
      case 'open':
        return <Badge variant="destructive">Open</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

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

  return (
    <div className="space-y-6">
      {/* Safety Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Days Since Incident</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Safety Compliance</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Incidents</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Incident Rate</p>
                <p className="text-2xl font-bold flex items-center gap-1">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  -15%
                </p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Safety Incidents */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Safety Incidents
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Report Incident
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {safetyIncidents.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell className="font-medium">{incident.employee}</TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                  <TableCell>{getStatusBadge(incident.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Safety Training */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Safety Training Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safetyTraining.map((training) => (
                <div key={training.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{training.course}</h4>
                    {training.required && <Badge variant="destructive">Required</Badge>}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress:</span>
                      <span>{training.completed}/{training.employees} employees</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${training.compliance}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Due: {training.dueDate}</span>
                      <span>{training.compliance}% complete</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Equipment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Safety Equipment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Next Inspection</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {safetyEquipment.map((equipment) => (
                  <TableRow key={equipment.id}>
                    <TableCell className="font-medium">{equipment.item}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{equipment.assigned}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getConditionBadge(equipment.condition)}</TableCell>
                    <TableCell className="text-sm">{equipment.nextInspection}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRSafety;
