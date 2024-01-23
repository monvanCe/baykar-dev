import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppContext from './quizApp/data/AppContext';

const App: React.FC = () => {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Container fluid className="vh-100 bg-dark">
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
        <Col className="d-flex align-items-center border p-2 justify-content-between">
          <Button
            variant="secondary"
            onClick={() => {
              navigate('quizApp');
            }}
          >
            Go To Quiz App
          </Button>

          <Form.Check
            type="checkbox"
            className="option"
            label="Sıradaki Butonu?"
            checked={data.isButton}
            onChange={() => {
              setData((prev) => ({ ...prev, isButton: !data.isButton }));
            }}
          />
          <Form.Check
            type="checkbox"
            className="option"
            label="Hızlandırılmış?"
            checked={data.isAccelerated}
            onChange={() => {
              setData((prev) => ({
                ...prev,
                isAccelerated: !data.isAccelerated,
              }));
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
