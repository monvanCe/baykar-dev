import React from 'react';

export const CustomToggle: React.FC<{
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#support"
    ref={ref as React.RefObject<HTMLAnchorElement>}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

export const CustomMenu: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  'aria-labelledby'?: string;
}> = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul>{React.Children.toArray(children)}</ul>
      </div>
    );
  }
);
