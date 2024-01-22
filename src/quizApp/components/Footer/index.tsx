import React from 'react';
import './index.css';
import { Button } from '../Button';

export const Footer: React.FC = () => {
  return (
    <div className="h-100 w-100">
      {false && (
        <Button bgColor="orange" textColor="white" onClick={() => {}}>
          Cevabı Onayla
        </Button>
      )}
    </div>
  );
};
