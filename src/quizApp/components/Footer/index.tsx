import React, { useState } from 'react';
import './index.css';

export const Footer: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <div className="h-100 w-100">
      <div
        onClick={handleClick}
        className={isClicked ? 'button clicked' : 'button'}
      >
        Cevabı Onayla
      </div>
    </div>
  );
};
