import React from 'react';
import { Container } from 'react-bootstrap';

export const MenuItem = (props: any) => {
  //true || false
  const isVertical = props?.vertical ?? false;
  //icon object || false
  const iconLeft = props?.iconLeft ?? false;
  //icon object || false
  const iconRight = props?.iconRight ?? false;
  //badge object || false
  const badge = props?.badge ?? false;
  //children object
  const Children = props?.children;

  return <>{Children}</>;
};
