import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { FeaturedProducts } from './Products';
import { TrustStrip, SocialProof, HowItWorks, InteriorDesign, Gallery, FAQ, FinalCTA, FestivePromo } from './Sections';

interface HomeProps {
  onOpenConsultation: () => void;
  onProductEnquiry: (productName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation, onProductEnquiry }) => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when landing on home from another page
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero onOpenConsultation={onOpenConsultation} />
      <FestivePromo />
      <TrustStrip />
      <SocialProof />
      <HowItWorks onOpenConsultation={onOpenConsultation} />
      <FeaturedProducts onQuickEnquiry={onProductEnquiry} />
      <InteriorDesign onOpenConsultation={onOpenConsultation} />
      <Gallery />
      <FAQ />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </>
  );
};