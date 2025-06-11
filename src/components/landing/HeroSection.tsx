
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-primary/5 to-primary/10 py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
          #1 ERP Solution for Cleaning Services
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Streamline Your
          <span className="text-primary block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Cleaning Business</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          CleanSW is the comprehensive ERP solution designed specifically for cleaning service companies. 
          Manage employees, schedule services, track inventory, and grow your business with powerful analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/5">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
