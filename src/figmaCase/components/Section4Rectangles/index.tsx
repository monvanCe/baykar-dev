import React from 'react';
import './index.css';

import { rectangle6 } from '../../assets/rectangles/rectangle6';
import { rectangle7 } from '../../assets/rectangles/rectangle7';
import { rectangle8 } from '../../assets/rectangles/rectangle8';
import { rectangle9 } from '../../assets/rectangles/rectangle9';
import { rectangle10 } from '../../assets/rectangles/rectangle10';
import { rectangle11 } from '../../assets/rectangles/rectangle11';

export const Section4Rectangles = () => {
  return (
    <div className="Section4RectanglesContainer">
      <div className="rectangle6">{rectangle6}</div>
      <div className="rectangle7">{rectangle7}</div>
      <div className="rectangle8">{rectangle8}</div>
      <div className="rectangle9">{rectangle9}</div>
      <div className="rectangle10">{rectangle10}</div>
      <div className="rectangle11">{rectangle11}</div>
    </div>
  );
};
