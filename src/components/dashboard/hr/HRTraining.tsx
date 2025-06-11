
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  Clock, 
  Users, 
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye
} from 'lucide-react';

const HRTraining = () => {
  const trainingPrograms = [
    {
      id: '1',
      title: 'Basic Cleaning Techniques',
      type: 'Mandatory',
      duration: '4 hours',
      enrolled: 24,
      completed: 18,
      certification: true,
      nextSession: '2024-06-20'
    },
    {
      id: '2',
      title: 'Chemical Safety Training',
      type: 'Mandatory',
      duration: '2 hours',
      enrolled: 32,
      completed: 28,
      certification: true,
      nextSession: '2024-06-18'
    },
    {
      id: '3',
      title: 'Customer Service Excellence',
      type: 'Optional',
      duration: '3 hours',
      enrolled: 15,
      completed: 12,
      certification: false,
      nextSession: '2024-06-25'
    }
  ];

  const employeeCertifications = [
    {
      id: '1',
      employee: 'John Smith',
      department: 'Field Operations',
      certifications: ['Basic Cleaning', 'Chemical Safety', 'Equipment Operation'],
      expiringCert: 'Chemical Safety',
      expiryDate: '2024-08-15',
      status: 'active'
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      department: 'Supervisor',
      certifications: ['Basic Cleaning', 'Chemical Safety', 'Leadership', 'Quality Control'],
      expiringCert: 'Leadership',
      expiryDate: '2024-07-20',
      status: 'active'
    },
    {
      id: '3',
      employee: 'Mike Chen',
      department: 'Field Operations',
      certifications: ['Basic Cleaning'],
      expiringCert: null,
      expiryDate: null,
      status: 'incomplete'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default">Active</Badge>;
      case 'incomplete':
        return <Badge variant="destructive">Incomplete</Badge>;
      case 'expired':
        return <Badge variant="secondary">Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === 'Mandatory' ? 
      <Badge variant="destructive">Mandatory</Badge> : 
      <Badge variant="outline">Optional</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Training Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Programs</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certified Employees</p>
                <p className="text-2xl font-bold">84%</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Expiring Soon</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Training Hours</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="h-5 w-5 mr-2" />
            Training & Certification Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="programs" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="programs">Training Programs</TabsTrigger>
              <TabsTrigger value="certifications">Employee Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="programs">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Training Programs</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Program
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Next Session</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainingPrograms.map((program) => (
                      <TableRow key={program.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{program.title}</p>
                            {program.certification && (
                              <div className="flex items-center gap-1 mt-1">
                                <Award className="h-3 w-3 text-yellow-600" />
                                <span className="text-xs text-muted-foreground">Certification</span>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{getTypeBadge(program.type)}</TableCell>
                        <TableCell>{program.duration}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-3 w-3" />
                              <span>{program.enrolled} enrolled</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span>{program.completed} completed</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{program.nextSession}</TableCell>
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

            <TabsContent value="certifications">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Employee Certifications</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Certifications</TableHead>
                      <TableHead>Expiring Soon</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeCertifications.map((emp) => (
                      <TableRow key={emp.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{emp.employee}</p>
                            <p className="text-sm text-muted-foreground">{emp.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {emp.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {emp.expiringCert && (
                            <div className="text-sm">
                              <p className="font-medium text-orange-600">{emp.expiringCert}</p>
                              <p className="text-muted-foreground">{emp.expiryDate}</p>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{getStatusBadge(emp.status)}</TableCell>
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

export default HRTraining;
