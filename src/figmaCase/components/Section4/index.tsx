import React from 'react';
import './index.css';
import { Col, Row, Stack } from 'react-bootstrap';

import { checkIcon } from '../../assets/checkIcon';
import { Button } from '../Button';
import { ScreenDesktop } from '../ScreenDesktop';
import VideoImage from '../../assets/Video.png';
import { Section4Rectangles } from '../Section4Rectangles';

export const Section4 = () => {
  return (
    <div className="section4Container">
      <div className="section4Body">
        <div className="section4BodyInner ">
          <div className="sectionBodyCustomCol">
            <div className="section4BodyTitle">Why join us</div>
            <div>
              <Row>
                <Col md={1}>{checkIcon}</Col>
                <Col md={11}>
                  Est et in pharetra magna adipiscing ornare aliquam.
                </Col>
              </Row>
              <Row>
                <Col md={1}>{checkIcon}</Col>
                <Col md={11}>
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </Col>
              </Row>
              <Row>
                <Col md={1}>{checkIcon}</Col>
                <Col md={11}>Ullamcorper ornare in et egestas dolor orci.</Col>
              </Row>
            </div>
            <div>
              <Col style={{ maxWidth: 225 }}>
                <Button size="L" color="#78350F" variant="outline">
                  Sing Up Now
                </Button>
              </Col>
            </div>
          </div>

          <div>
            <div className="section4Video">
              <ScreenDesktop
                circles={true}
                image={<img src={VideoImage} alt="videoImage" />}
              />
            </div>
          </div>
          <Section4Rectangles />
        </div>
      </div>
    </div>
  );
};
