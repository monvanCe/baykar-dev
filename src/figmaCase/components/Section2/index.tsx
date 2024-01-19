import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';

export const Section2 = () => {
  return (
    <Row className="section2Container">
      <Col>
        <div className="w-100 h-100 bg-dark"></div>
      </Col>
      <Col>
        <div className="w-100 h-100 bg-dark"></div>
      </Col>
      <Col>
        <div className="w-100 h-100 bg-dark"></div>
      </Col>
    </Row>
  );
};
