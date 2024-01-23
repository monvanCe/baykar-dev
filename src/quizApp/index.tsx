import React from 'react';
import { Timer } from './components/Timer';
import { QuestionCounter } from './components/QuestionCounter';
import { Question } from './components/Question';
import { Rules } from './components/Rules';
import { Footer } from './components/Footer';

import { FetchQuestions } from './utils/FetchQuestions';

const QuizApp: React.FC = () => {
  return (
    <div className="d-flex vh-100 w-100 flex-column overflow-hidden">
      <div className="h-25 w-100">
        <Timer />
      </div>
      <div className="h-50 w-100 bg-light d-flex">
        <div className="h-100 w-25 p-1">
          <QuestionCounter />
        </div>
        <div className="h-100 w-50 p-1">
          <Question />
        </div>
        <div className="h-100 w-25 p-1">
          <Rules />
        </div>
      </div>
      <div className="w-100 h-25 p-1">
        <Footer />
      </div>

      <FetchQuestions />
    </div>
  );
};

export default QuizApp;
