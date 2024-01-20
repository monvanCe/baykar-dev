import React from 'react';
import './index.css';
import { rectangle1 } from '../../assets/rectangles/rectangle1';
import { rectangle2 } from '../../assets/rectangles/rectangle2';
import { rectangle3 } from '../../assets/rectangles/rectangle3';
import { rectangle4 } from '../../assets/rectangles/rectangle4';
import { rectangle5 } from '../../assets/rectangles/rectangle5';

export const Section3Rectangles = () => {
  return (
    <div className="Section3RectanglesContainer">
      <div className="rectangle1">{rectangle1}</div>
      <div className="rectangle2">{rectangle2}</div>
      <div className="rectangle3">{rectangle3}</div>
      <div className="rectangle4">{rectangle4}</div>
      <div className="rectangle5">{rectangle5}</div>
    </div>
  );
};
