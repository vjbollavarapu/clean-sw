
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to Transform Your Cleaning Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of cleaning professionals who trust CleanSW to manage and grow their business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button size="lg" className="px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="px-8 py-3">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
