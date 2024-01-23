import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Main';
import FigmaCase from './figmaCase';
import QuizApp from './quizApp';
import { Provider } from './quizApp/data/AppContext';
import { Results } from './quizApp/components/Results';
import React from 'react';
import { Countdown } from './quizApp/utils/Countdown';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="figmaCase" element={<FigmaCase />} />
        <Route path="quizApp" element={<QuizApp />} />
        <Route path="results" element={<Results />} />
      </Routes>
      <Countdown />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider>
    <App />
  </Provider>
);
