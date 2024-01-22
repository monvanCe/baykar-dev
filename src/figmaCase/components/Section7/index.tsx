import React from 'react';
import './index.css';
import { chart } from '../../assets/chart';
import { Ellipses } from '../../assets/Ellipses';
import { SectionText } from '../SectionText';
import { Ellipse } from '../../assets/Ellipse';
import Section7Shoe from '../../assets/Section7Shoe.png';
import { Section7Tooltip } from '../../assets/Section7Tooltip';

export const Section7: React.FC = () => {
  return (
    <div className="section7Container">
      <div className="section7Chart">{chart}</div>
      <div className="section7Ellipses">{Ellipses}</div>
      <div className="section7SectionText">
        <SectionText
          headline1="11,658,467"
          headline2="Shoes Collected"
          alignment="Center"
          color="white"
        />
      </div>
      <div className="section7Col">
        <div className="section7ColEllipse">{Ellipse}</div>
        <div className="section7Tooltip">{Section7Tooltip}</div>
        <img src={Section7Shoe} alt="section7Shoe" />
      </div>
    </div>
  );
};
