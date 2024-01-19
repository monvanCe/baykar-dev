import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';
import { ContentBox } from '../ContentBox';

import { gobletIcon } from '../../assets/goblet';
import { tunnelIcon } from '../../assets/tunnel';
import { tvIcon } from '../../assets/tvIcon';

export const Section2 = () => {
  return (
    <Row className="section2Container">
      <Col>
        <div className="w-100 h-100">
          <ContentBox
            icon={gobletIcon}
            title="Nibh viverra"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          />
        </div>
      </Col>
      <Col>
        <div className="w-100 h-100">
          <ContentBox
            icon={tunnelIcon}
            title="Cursus amet"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          />
        </div>
      </Col>
      <Col>
        <div className="w-100 h-100">
          <ContentBox
            icon={tvIcon}
            title="Ipsum fermentum"
            text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          />
        </div>
      </Col>
    </Row>
  );
};
