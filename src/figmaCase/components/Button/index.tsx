import React from 'react';
import './index.css';

interface ButtonProps {
  variant?: 'outline' | 'default' | 'text';
  size?: 'M' | 'L' | 'XL';
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const variant = props?.variant ?? 'default';
  const size = props?.size ?? 'M';
  const color = props.color;
  const iconLeft = props?.iconLeft;
  const iconRight = props?.iconRight;
  const children = props?.children;

  const fontSizes: { [key in 'M' | 'L' | 'XL']: number } = {
    M: 16,
    L: 20,
    XL: 24,
  };

  return (
    <div
      className="buttonContainer"
      style={{
        borderColor: color,
        backgroundColor: variant === 'default' ? color : 'transparent',
        borderRadius: children ? 8 : 100,
        borderWidth: variant === 'text' ? 0 : 2,
        padding: 12,
      }}
    >
      {iconLeft && <div className="mx-2">{iconLeft}</div>}
      {children && (
        <span
          className="buttonText"
          style={{
            color: variant === 'default' ? 'white' : color,
            fontSize: fontSizes[size],
          }}
        >
          {children}
        </span>
      )}
      {iconRight && <div className="mx-2">{iconRight}</div>}
    </div>
  );
};
