
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Calendar, 
  Database, 
  DollarSign, 
  FileText, 
  Settings, 
  Shield,
  BarChart3,
  Clock,
  Smartphone,
  Cloud
} from 'lucide-react';

const ModulesShowcase = () => {
  const modules = [
    {
      category: "Core Operations",
      items: [
        {
          icon: Calendar,
          title: "Advanced Scheduling",
          description: "AI-powered scheduling with route optimization and team management",
          features: ["Drag & drop interface", "Auto-assign teams", "Route optimization", "Recurring schedules"]
        },
        {
          icon: Users,
          title: "Employee Management",
          description: "Complete HR solution with payroll, attendance, and performance tracking",
          features: ["Digital timesheets", "Performance reviews", "Training records", "Payroll integration"]
        },
        {
          icon: Building2,
          title: "Client Portal",
          description: "Self-service portal for clients to manage their cleaning services",
          features: ["Service requests", "Schedule viewing", "Payment history", "Feedback system"]
        }
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Real-time insights into your business performance and growth metrics",
          features: ["Revenue tracking", "Performance KPIs", "Trend analysis", "Custom reports"]
        },
        {
          icon: DollarSign,
          title: "Financial Management",
          description: "Comprehensive financial tools for accounting and business planning",
          features: ["Invoice automation", "Expense tracking", "Profit analysis", "Tax preparation"]
        },
        {
          icon: Database,
          title: "Inventory Control",
          description: "Smart inventory management with automated reordering and cost tracking",
          features: ["Stock alerts", "Supplier management", "Cost analysis", "Equipment tracking"]
        }
      ]
    },
    {
      category: "Quality & Compliance",
      items: [
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Maintain consistent service quality with digital checklists and inspections",
          features: ["Digital checklists", "Photo documentation", "Quality scores", "Client feedback"]
        },
        {
          icon: FileText,
          title: "Document Management",
          description: "Centralized document storage with version control and access management",
          features: ["Contract storage", "Certification tracking", "Version control", "Access permissions"]
        },
        {
          icon: Settings,
          title: "System Configuration",
          description: "Flexible system settings to match your business processes and requirements",
          features: ["Custom workflows", "User permissions", "Integration settings", "Backup management"]
        }
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: "Mobile App", description: "Full-featured mobile app for field teams" },
    { icon: Cloud, title: "Cloud-Based", description: "Secure cloud infrastructure with 99.9% uptime" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock customer support and monitoring" }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            Complete Solution
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Comprehensive Business Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every tool you need to run, manage, and grow your cleaning business, 
            all integrated into one powerful platform.
          </p>
        </div>

        {modules.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <module.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{module.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Platform Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesShowcase;
