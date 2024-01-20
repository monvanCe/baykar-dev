import React from 'react';
import './index.css';
import { Col, Row, Stack } from 'react-bootstrap';

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
  theme?: 'dark' | 'light' | 'transparent';
}

export const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const icon = props?.icon;
  const image = props?.image;
  const title = props?.title;
  const text = props?.text;
  const button = props?.button;
  const user = props?.user;
  const theme = props?.theme ?? 'transparent';

  const backgroundColor: string =
    theme === 'dark' ? '#0f172a' : theme === 'light' ? 'white' : 'transparent';

  const color: string = theme === 'dark' ? 'white' : '#0f172a';

  const boxShadow =
    theme === 'dark'
      ? '0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25)'
      : theme === 'light'
      ? '0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.10)'
      : '0';

  const padding = theme === 'light' ? 32 : 0;

  return (
    <Stack
      style={{
        backgroundColor,
        boxShadow,
        padding,
      }}
      className="h-100 w-100 justify-content-between rounded overflow-hidden"
    >
      {icon && (
        <Row className="justify-content-start">
          <Col>{icon}</Col>
        </Row>
      )}
      <Row>{image}</Row>
      <Row>
        <div
          style={{
            color,
          }}
          className={`contentBoxTitle mt-2 ${theme === 'dark' ? 'mx-4' : ''}`}
        >
          {title}
        </div>
      </Row>
      <Row>
        <div
          style={{
            color,
          }}
          className={`contentBoxText mt-3 ${theme === 'dark' ? 'mx-4' : ''}`}
        >
          {text}
        </div>
      </Row>
      <Row>
        <Col className="mx-4">{button}</Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={3}>{user?.image}</Col>
        <Col md={9}>
          <div className="personName">{user?.name}</div>
          <div className="personJob">{user?.job}</div>
        </Col>
      </Row>
    </Stack>
  );
};
