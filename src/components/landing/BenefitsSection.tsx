
import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Increase operational efficiency by 40%",
    "Reduce administrative overhead",
    "Improve client satisfaction rates",
    "Streamline payroll and HR processes",
    "Real-time business insights",
    "Scalable for growing businesses"
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Transform Your Cleaning Business Operations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of cleaning service companies that have revolutionized 
              their operations with CleanSW's comprehensive management platform.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional cleaning team using CleanSW"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
