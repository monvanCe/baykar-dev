import React from 'react';
import './index.css';

interface ButtonProps {
  variant?: 'outline' | 'default' | 'text';
  size?: 'M' | 'L' | 'XL';
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const variant = props?.variant ?? 'default';
  const size = props?.size ?? 'M';
  const color = props.color;
  const iconLeft = props?.iconLeft;
  const iconRight = props?.iconRight;
  const children = props?.children;
  const onClick = props?.onClick;

  const fontSizes: { [key in 'M' | 'L' | 'XL']: number } = {
    M: 16,
    L: 20,
    XL: 24,
  };

  const padding: {
    [key in 'M' | 'L' | 'XL']: { [key in 'h' | 'v' | 't']: number };
  } = {
    M: { h: 12, v: 12, t: 16 },
    L: { h: 16, v: 16, t: 16 },
    XL: { h: 24, v: 20, t: 24 },
  };

  return (
    <div
      onClick={onClick}
      className="buttonContainer"
      style={{
        borderColor: color,
        backgroundColor: variant === 'default' ? color : 'transparent',
        borderRadius: children ? 8 : 100,
        borderWidth: variant === 'text' ? 0 : 2,
        paddingRight: padding[size].h,
        paddingLeft: padding[size].h,
        paddingTop: padding[size].v,
        paddingBottom: padding[size].v,
      }}
    >
      {iconLeft && <div>{iconLeft}</div>}
      {children && (
        <div
          className="buttonText"
          style={{
            color: variant === 'default' ? 'white' : color,
            fontSize: fontSizes[size],
            paddingLeft: padding[size].t,
            paddingRight: padding[size].t,
          }}
        >
          {children}
        </div>
      )}
      {iconRight && <div>{iconRight}</div>}
    </div>
  );
};
