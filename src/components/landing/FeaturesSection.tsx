
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      description: "Comprehensive HR tools for managing staff, schedules, and payroll with role-based access control.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Service Scheduling",
      description: "Advanced scheduling system to manage client appointments, assign teams, and track service completion.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Inventory Control",
      description: "Real-time inventory tracking, automated reordering, and supplier management for cleaning supplies.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Client Management",
      description: "Complete client database with service history, preferences, and automated billing systems.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "Financial Analytics",
      description: "Detailed financial reporting, expense tracking, and profitability analysis for informed decisions.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Quality control checklists, client feedback systems, and performance monitoring tools.",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="outline">
            Complete Toolkit
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From employee management to client billing, CleanSW provides all the tools 
            you need to operate efficiently and scale your cleaning service business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
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
