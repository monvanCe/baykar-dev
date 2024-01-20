import React from 'react';
import './index.css';

import { Header } from './components/Header';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';
import { Section5 } from './components/Section5';

const FigmaCase = () => {
  return (
    <>
      <Header />

      <div className="background-container">
        <div className="rectangularBG"></div>
        <Section1 />
        <Section2 />
      </div>

      <Section3 />

      <Section4 />

      <Section5 />
    </>
  );
};

export default FigmaCase;
