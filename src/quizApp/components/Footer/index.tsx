import React, { useContext } from 'react';
import './index.css';
import { Button } from '../Button';
import AppContext from '../../data/AppContext';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.currentQuestion !== undefined && data.currentQuestion < 9) {
      setData((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        time: 30,
      }));
    } else {
      navigate('/results');
    }
  };

  return (
    <div className="h-100 w-100">
      {data.isButton && (
        <Button bgColor="orange" textColor="white" onClick={handleClick}>
          Cevabı Onayla
        </Button>
      )}
    </div>
  );
};
