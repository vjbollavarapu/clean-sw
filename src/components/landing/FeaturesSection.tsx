
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Users, 
  Calendar, 
  Database, 
  Settings, 
  CheckCircle
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Comprehensive HR tools for managing staff, schedules, and payroll with role-based access control."
    },
    {
      icon: Calendar,
      title: "Service Scheduling",
      description: "Advanced scheduling system to manage client appointments, assign teams, and track service completion."
    },
    {
      icon: Database,
      title: "Inventory Control",
      description: "Real-time inventory tracking, automated reordering, and supplier management for cleaning supplies."
    },
    {
      icon: Shield,
      title: "Client Management",
      description: "Complete client database with service history, preferences, and automated billing systems."
    },
    {
      icon: Settings,
      title: "Financial Analytics",
      description: "Detailed financial reporting, expense tracking, and profitability analysis for informed decisions."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Quality control checklists, client feedback systems, and performance monitoring tools."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From employee management to client billing, CleanSW provides all the tools 
            you need to operate efficiently and scale your cleaning service business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
