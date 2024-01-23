import React, { useContext, useEffect } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

export const Countdown: React.FC = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setData((prev) => {
          const updatedTime = Math.max(0, prev?.time - 1);

          if (updatedTime === 0 && prev?.currentQuestion === 9) {
            navigate('/results');
          }

          return {
            ...prev,
            time: updatedTime === 0 ? 30 : updatedTime,
            currentQuestion:
              updatedTime === 0
                ? prev?.currentQuestion + 1
                : prev?.currentQuestion,
          };
        });
      },
      data?.isAccelerated ? 100 : 1000
    );

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [data?.currentQuestion, data?.isAccelerated]);

  return <></>;
};
