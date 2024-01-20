import React from 'react';
import './index.css';
import { Col, Row, Stack } from 'react-bootstrap';
import { redDot } from '../../assets/redDot';
import { greenDot } from '../../assets/greenDot';
import { yellowDot } from '../../assets/yellowDot';

interface ScreenDesktopProps {
  circles?: boolean;
  image: React.ReactNode;
}

export const ScreenDesktop: React.FC<ScreenDesktopProps> = (props) => {
  const circles = props?.circles ?? true;
  const image = props?.image;
  return (
    <div className="ScreenDesktopContainer">
      {true && (
        <div className="screenDesktopHeader">
          <div>{redDot}</div>
          <div>{yellowDot}</div>
          <div>{greenDot}</div>
        </div>
      )}
      <div className="screenDesktopBody">{image}</div>
    </div>
  );
};
