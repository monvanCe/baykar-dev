import React from 'react';
import './index.css';
import { SectionText } from '../SectionText';

import shoe from '../../assets/shoe.png';
import { playCircle } from '../../assets/playCircle';
import { Button } from '../Button';

export const Section1 = () => {
  return (
    <div className="section1Container">
      <div className="section1SectionText">
        <SectionText
          text="Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet."
          headline1={'Collectible Sneakers'}
          alignment="Left"
          button1={
            <Button size="M" color="#78350F" variant="outline">
              Sign up now
            </Button>
          }
          button2={
            <Button
              iconLeft={playCircle}
              size="M"
              color="#78350F"
              variant="text"
            >
              Watch Demo
            </Button>
          }
        />
      </div>

      <div className="shoeContainer">
        <img src={shoe} alt="section1shoe" />
        <div className="shoeBackgroundShape" />
      </div>
    </div>
  );
};
