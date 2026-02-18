import React from 'react';
import DecisionWrapper from './components/DecisionWrapper';
import Header from './components/sections/Header';
import Identification from './components/sections/Identification';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Differential from './components/sections/Differential';
import SocialProof from './components/sections/SocialProof';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <DecisionWrapper>
      <Header />
      <Identification />
      <Problem />
      <Solution />
      <Differential />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </DecisionWrapper>
  );
}

export default App;
