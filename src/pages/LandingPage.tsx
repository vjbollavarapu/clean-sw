
import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import DetailedFeaturesSection from '@/components/landing/DetailedFeaturesSection';
import ModulesShowcase from '@/components/landing/ModulesShowcase';
import InteractiveDemo from '@/components/landing/InteractiveDemo';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <ModulesShowcase />
      <InteractiveDemo />
      <BenefitsSection />
      <TestimonialsSection />
      {/* <PricingSection />*/}
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
