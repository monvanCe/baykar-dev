import React, { useState } from 'react';
import './index.css';

interface buttonProps {
  onClick?: () => void;
  children?: string;
  bgColor?: string;
  textColor?: string;
}

export const Button: React.FC<buttonProps> = (props) => {
  const onClick = props?.onClick;
  const children = props?.children;
  const bgColor = props?.bgColor ?? 'white';
  const textColor = props?.textColor;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const combinedFunction = () => {
    handleClick();
    onClick && onClick();
  };

  return (
    <div
      onClick={combinedFunction}
      style={{ backgroundColor: bgColor, color: textColor }}
      className={isClicked ? 'button clicked' : 'button'}
    >
      {children}
    </div>
  );
};
