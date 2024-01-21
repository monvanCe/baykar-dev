import React from 'react';
import './index.css';
import { Col, Row, Stack } from 'react-bootstrap';
import { Button } from '../Button';
import { ContentBox } from '../ContentBox';

import section3Image1 from '../../assets/Images/section3Image1.png';
import section3Image2 from '../../assets/Images/section3Image2.png';
import section3Image3 from '../../assets/Images/section3Image3.png';
import { shopping } from '../../assets/Icons/shopping';
import { Section3Rectangles } from './Rectangles';

const section3Data = [
  {
    image: section3Image1,
  },
  {
    image: section3Image2,
  },
  {
    image: section3Image3,
  },
];

const commonTitle = 'Title';
const commonText =
  'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.';

export const Section3 = () => {
  return (
    <Stack className="section3Container">
      <Row className="section3HeaderContainer">
        <Col md={9} className="section3HeaderTitle">
          The best of the best
        </Col>
        <Col md={3}>
          <Button size="XL" color="white" variant="outline">
            Sign Up Now
          </Button>
        </Col>
      </Row>
      <Row className="section3Body h-100">
        {section3Data.map((item, index) => (
          <Col key={index} className="p-0">
            <div style={{ height: 472 }}>
              <ContentBox
                theme="dark"
                image={
                  <img src={item.image} alt={`section3Image${index + 1}`} />
                }
                title={commonTitle}
                text={commonText}
                button={
                  <Button
                    size="M"
                    color="white"
                    variant="outline"
                    iconLeft={shopping}
                  >
                    Buy Now
                  </Button>
                }
              />
            </div>
          </Col>
        ))}
      </Row>

      <Section3Rectangles />
    </Stack>
  );
};
