import React from 'react';
import './index.css';

interface VerticalMenuProps {
  links?: React.ReactNode[];
}

export const VerticalMenu: React.FC<VerticalMenuProps> = (props) => {
  const links = props?.links;

  return (
    <div className="verticalMenuContainer">
      {links?.map((el, i) => (
        <div className="verticalMenuLinkContainer" key={i}>
          <div className="verticalMenuLink">{el}</div>
        </div>
      ))}
    </div>
  );
};
