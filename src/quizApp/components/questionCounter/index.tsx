import React, { useContext } from 'react';
import './index.css';

import AppContext from '../../data/AppContext';

export const QuestionCounter: React.FC = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center bg-danger">
      <div className="questionCounterText">
        {data?.currentQuestion !== undefined ? data.currentQuestion + 1 : 0}
      </div>
    </div>
  );
};
