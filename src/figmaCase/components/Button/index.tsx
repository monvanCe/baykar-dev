import React from 'react';
import './index.css';

interface ButtonProps {
  style?: 'outline' | 'default';
  size?: 'M' | 'L' | 'XL';
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const style = props?.style ?? 'default';
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

  const containerPaddings: {
    [key in 'M' | 'L' | 'XL']: { [key in 'h' | 'v']: number };
  } = {
    M: { h: 16, v: 16 },
    L: { h: 16, v: 16 },
    XL: { h: 24, v: 20 },
  };

  return (
    <div
      className="buttonContainer"
      style={{
        borderColor: color,
        paddingLeft: containerPaddings[size].h,
        paddingRight: containerPaddings[size].h,
        paddingTop: containerPaddings[size].v,
        paddingBottom: containerPaddings[size].v,
        backgroundColor: style === 'default' ? color : 'transparent',
      }}
    >
      {iconLeft && <>{iconLeft}</>}
      {children && (
        <span
          className="buttonText"
          style={{
            color: style === 'default' ? 'white' : color,
            fontSize: fontSizes[size],
            paddingLeft: containerPaddings[size].h,
            paddingRight: containerPaddings[size].h,
          }}
        >
          {children}
        </span>
      )}
      {iconRight && <>{iconRight}</>}
    </div>
  );
};
