import React from 'react';

interface MenuItemProps {
  isVertical?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  badge?: boolean;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const isVertical = props?.isVertical ?? false;
  const iconLeft = props?.iconLeft ?? false;
  const iconRight = props?.iconRight ?? false;
  const badge = props?.badge ?? false;
  const children = props?.children;

  const combineProps = { isVertical, iconLeft, iconRight, badge };

  return <>{combineProps && children}</>;
};
