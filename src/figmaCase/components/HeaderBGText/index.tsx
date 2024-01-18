import React from 'react';
import './index.css';

export const HeaderBGText = (props: any) => {
  const children = props?.children;

  return <span className="headerBGText">{children}</span>;
};
