
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  Database, 
  Shield, 
  Settings, 
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const DetailedFeaturesSection = () => {
  const [activeModule, setActiveModule] = useState('hr');

  const modules = [
    {
      id: 'hr',
      title: 'Human Resources',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Comprehensive employee management system',
      features: [
        'Employee onboarding and offboarding',
        'Payroll management and tax calculations',
        'Performance tracking and reviews',
        'Leave management and approval workflows',
        'Training and certification tracking',
        'Role-based access control'
      ]
    },
    {
      id: 'scheduling',
      title: 'Smart Scheduling',
      icon: Calendar,
      color: 'bg-green-500',
      description: 'AI-powered scheduling and route optimization',
      features: [
        'Automated team assignment',
        'Route optimization for efficiency',
        'Real-time schedule adjustments',
        'Client preference management',
        'Recurring service automation',
        'Mobile app for field teams'
      ]
    },
    {
      id: 'inventory',
      title: 'Inventory Control',
      icon: Database,
      color: 'bg-purple-500',
      description: 'Real-time inventory tracking and management',
      features: [
        'Automated reorder points',
        'Supplier management',
        'Cost tracking and analysis',
        'Equipment maintenance schedules',
        'Stock level alerts',
        'Purchase order automation'
      ]
    },
    {
      id: 'client',
      title: 'Client Management',
      icon: Shield,
      color: 'bg-orange-500',
      description: 'Complete client relationship management',
      features: [
        'Service history tracking',
        'Automated billing and invoicing',
        'Client feedback collection',
        'Contract management',
        'Quality assurance checklists',
        'Communication logs'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Analytics',
      icon: DollarSign,
      color: 'bg-red-500',
      description: 'Advanced financial reporting and analytics',
      features: [
        'Profit and loss statements',
        'Cash flow analysis',
        'Cost per service tracking',
        'Revenue forecasting',
        'Expense categorization',
        'Tax preparation support'
      ]
    },
    {
      id: 'quality',
      title: 'Quality Assurance',
      icon: CheckCircle,
      color: 'bg-teal-500',
      description: 'Maintain consistent service quality',
      features: [
        'Digital inspection checklists',
        'Photo documentation',
        'Client satisfaction surveys',
        'Performance metrics',
        'Issue tracking and resolution',
        'Certification compliance'
      ]
    }
  ];

  const activeModuleData = modules.find(m => m.id === activeModule);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            Comprehensive Solution
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Explore Our Complete Feature Set
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into each module that makes CleanSW the most comprehensive 
            ERP solution for cleaning service businesses.
          </p>
        </div>

        <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {modules.map((module) => (
              <TabsTrigger 
                key={module.id} 
                value={module.id}
                className="flex flex-col items-center gap-2 p-4 h-auto"
              >
                <module.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{module.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="mt-0">
              <Card className="border-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${module.color}`}>
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {module.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {module.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-4">Module Benefits</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>Save 3-5 hours per week on administrative tasks</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <span>Increase operational efficiency by 40%</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span>Reduce costs through better resource management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;
