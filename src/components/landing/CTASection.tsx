
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f1f5f9" fill-opacity="0.3"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">Rated 4.9/5 by 500+ businesses</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready to Transform Your 
          <span className="text-primary block mt-2">Cleaning Business?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Join thousands of cleaning professionals who trust CleanSW to manage and grow their business. 
          Start your free trial today and see the difference in just 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/login" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-primary/30 text-primary hover:bg-primary/5">
            Schedule Demo
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>No setup fees</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
