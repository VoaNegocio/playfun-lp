import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Identification from './components/sections/Identification';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Differential from './components/sections/Differential';
import SocialProof from './components/sections/SocialProof';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Header>
      <Hero />
      <Identification />
      <Problem />
      <Solution />
      <Differential />
      <SocialProof />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </Header>
  );
}

export default App;
