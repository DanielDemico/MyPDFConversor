
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import SupportedFormats from '../components/SupportedFormats';
import Faq from '../components/Faq';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <SupportedFormats />
      <Faq />
    </>
  );
};

export default HomePage;
