import './index.css';
import { Row, Col } from 'react-bootstrap';
import { ContentBox } from '../ContentBox';

import { section2ContentBoxes } from '../../consts';

export const Section2 = () => {
  return (
    <Row className="section2Container">
      {section2ContentBoxes.map((box, index) => (
        <Col key={index} className="section2ContentBoxContainer">
          <div className="w-100 h-100">
            <div>
              <ContentBox icon={box.icon} title={box.title} text={box.text} />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
