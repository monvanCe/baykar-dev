import React from 'react';
import './index.css';

interface FooterColumnProps {
  title: string;
  links: React.ReactNode[];
}

export const FooterColumn: React.FC<FooterColumnProps> = (props) => {
  const title = props.title;
  const links = props.links;

  return (
    <div className="footerColumnContainer">
      <div className="footerColumnTitleContainer">
        <div className="footerColumnTitle">{title}</div>
      </div>
      {links.map((el, i) => (
        <div className="footerColumnLinkContainer" key={i}>
          <div className="footerColumnLink">{el}</div>
        </div>
      ))}
    </div>
  );
};
