
import React from 'react';
import { CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    "Increase operational efficiency by 40%",
    "Reduce administrative overhead",
    "Improve client satisfaction rates",
    "Streamline payroll and HR processes",
    "Real-time business insights",
    "Scalable for growing businesses"
  ];

  const stats = [
    { icon: TrendingUp, value: "40%", label: "Efficiency Increase" },
    { icon: Clock, value: "15hrs", label: "Time Saved Weekly" },
    { icon: Users, value: "500+", label: "Happy Clients" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/10 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Cleaning Business Operations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of cleaning service companies that have revolutionized 
              their operations with CleanSW's comprehensive management platform.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning team using CleanSW"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-medium">Live Demo</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border">
              <div className="text-sm text-muted-foreground">Trusted by 500+ companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
