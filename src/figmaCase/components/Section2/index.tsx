import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';
import { ContentBox } from '../ContentBox';

import { section2ContentBoxes } from '../../consts';

export const Section2: React.FC = () => {
  return (
    <Row className="section2Container">
      {section2ContentBoxes.map((box, index) => (
        <Col key={index} className="section2ContentBoxContainer">
          <ContentBox icon={box.icon} title={box.title} text={box.text} />
        </Col>
      ))}
    </Row>
  );
};
