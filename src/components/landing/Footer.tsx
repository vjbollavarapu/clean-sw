
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-secondary/40 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">CleanSW</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The complete ERP solution for cleaning service businesses. Streamline operations, 
              boost efficiency, and grow your business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>1-800-CLEANSW</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@cleansw.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Product</h4>
            <div className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'API', 'Mobile App'].map((item) => (
                <p key={item} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors flex items-center group">
                  {item}
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Support</h4>
            <div className="space-y-3">
              {['Help Center', 'Contact', 'Training', 'Community', 'Status'].map((item) => (
                <p key={item} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors flex items-center group">
                  {item}
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Company</h4>
            <div className="space-y-3 mb-6">
              {['About', 'Careers', 'Press', 'Partners'].map((item) => (
                <p key={item} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors flex items-center group">
                  {item}
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Stay Updated</h5>
              <p className="text-sm text-muted-foreground mb-3">Get the latest updates and tips</p>
              <Button size="sm" className="w-full">
                Subscribe
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-muted-foreground">
            &copy; 2024 CleanSW. All rights reserved. Built for cleaning professionals, by cleaning professionals.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
