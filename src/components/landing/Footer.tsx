
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">CleanSW</h3>
            <p className="text-muted-foreground mb-4">
              The complete ERP solution for cleaning service businesses.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>1-800-CLEANSW</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <Mail className="h-4 w-4" />
              <span>hello@cleansw.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Features</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Pricing</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Integrations</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">API</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Help Center</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Contact</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Training</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Community</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">About</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Careers</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Press</p>
              <p className="text-muted-foreground hover:text-foreground cursor-pointer">Partners</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CleanSW. All rights reserved. Built for cleaning professionals, by cleaning professionals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
