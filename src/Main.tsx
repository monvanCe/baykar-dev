import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col className="d-flex justify-content-end">
          <Button
            onClick={() => {
              navigate('figmaCase');
            }}
            variant="primary"
          >
            Go To FigmaCase
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('quizApp');
            }}
          >
            Go To Quiz App
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
