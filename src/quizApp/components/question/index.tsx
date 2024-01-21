import React, { useContext } from 'react';
import './index.css';
import { Form } from 'react-bootstrap';

import AppContext from '../../data/AppContext';

export const Question: React.FC = () => {
  const { data, setData } = useContext(AppContext);

  const isDefined = data?.questions && data?.currentQuestion;
  //@ts-ignore undefined senaryosu hesaba katıldı
  const question = isDefined
    ? //@ts-ignore undefined senaryosu hesaba katıldı
      data.questions[data.currentQuestion].question
    : 'Question';
  //@ts-ignore undefined senaryosu hesaba katıldı
  const text = isDefined
    ? //@ts-ignore undefined senaryosu hesaba katıldı
      data.questions[data.currentQuestion].text
    : 'A\nB\nC\nD';
  //@ts-ignore undefined senaryosu hesaba katıldı
  const answer =
    //@ts-ignore undefined senaryosu hesaba katıldı
    isDefined && data.answers ? data.answers[data.currentQuestion] : -1;

  const handleCheckbox = (i: number) => {
    let newAnswers = data?.answers;

    //@ts-ignore initial state verildi undefined olması imkansız
    if (data?.currentQuestion) newAnswer[data?.currentQuestion] = i;

    setData((prev) => ({ ...prev, answers: newAnswers }));
  };

  return (
    <Form className="questionContainer bg-dark">
      <div className="question">
        {question.charAt(0).toUpperCase() + question.slice(1)} ?
      </div>

      {Array.from({ length: 4 }, (_, i) => (
        <Form.Check
          key={i}
          type="checkbox"
          className="option"
          label={text.split('\n')[i]}
          checked={answer === i ? true : false}
          onChange={() => {
            handleCheckbox(i);
          }}
        />
      ))}
    </Form>
  );
};
