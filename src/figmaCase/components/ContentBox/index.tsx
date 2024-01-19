import React from 'react';
import './index.css';
import { Col, Row } from 'react-bootstrap';

interface userObjectInterface {
  image?: React.ReactNode;
  name?: string;
  job?: string;
}

interface ContentBoxProps {
  icon?: React.ReactNode;
  image?: React.ReactNode;
  title?: string;
  text?: string;
  button?: React.ReactNode;
  user?: userObjectInterface;
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const icon = props?.icon;
  const image = props?.image;
  const title = props?.title;
  const text = props?.text;
  const button = props?.button;
  const user = props?.user;

  return (
    <Col className="contentBoxContainer">
      <Row className="justify-content-start">
        <Col>{icon}</Col>
      </Row>
      <Row>{image}</Row>
      <Row>
        <div className="contentBoxTitle">{title}</div>
      </Row>
      <Row>
        <div className="contentBoxText">{text}</div>
      </Row>
      <Row>{button}</Row>
      <Row>
        <Col>{user?.image}</Col>
        <Col>
          <div>{user?.name}</div>
          <div>{user?.job}</div>
        </Col>
      </Row>
    </Col>
  );
};
