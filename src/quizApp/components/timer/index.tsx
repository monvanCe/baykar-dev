import React, { useContext } from 'react';
import './index.css';

import AppContext from '../../data/AppContext';

export const Timer: React.FC = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="h-100">
      <div className="h-100 w-100 d-flex">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="bar"
            style={{
              opacity: i >= data?.time ? 0.5 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};
