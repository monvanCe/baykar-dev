import React from 'react';
import './index.css';

export const HeaderText = (props: any) => {
  const children = props?.children;
  return <span className="headerText">{children}</span>;
};
