import React, { useContext } from 'react';
import './index.css';
import { Form } from 'react-bootstrap';

import AppContext from '../../data/AppContext';
import { Button } from '../Button';

export const Question: React.FC = () => {
  const { data, setData } = useContext(AppContext);

  const isDefined = data?.questions && data?.currentQuestion !== undefined;

  const question = isDefined
    ? data?.questions[data.currentQuestion]?.title
    : 'Question';

  const text = isDefined
    ? data?.questions[data.currentQuestion]?.body
    : 'A\nB\nC\nD';

  const answer =
    isDefined && data.answers ? data.answers[data.currentQuestion] : -1;

  const handleCheckbox = (i: number) => {
    if (data?.currentQuestion !== undefined && data?.time < 21) {
      let newAnswers = data?.answers;

      newAnswers[data?.currentQuestion] = i;
      setData((prev) => ({ ...prev, answers: newAnswers }));
    }
  };

  return isDefined ? (
    <Form className="questionContainer bg-dark">
      <div className="question">
        {question?.charAt(0).toUpperCase() + question?.slice(1)} ?
      </div>

      {Array.from({ length: 4 }, (_, i) => (
        <Form.Check
          key={i}
          type="checkbox"
          className="option"
          label={text?.split('\n')[i]}
          checked={answer === i + 1 ? true : false}
          onChange={() => {
            handleCheckbox(i + 1);
          }}
        />
      ))}
    </Form>
  ) : (
    <div className="questionContainer bg-dark">
      <Button
        onClick={() => {
          if (data?.questions?.length === 10) {
            setData((prev) => ({ ...prev, currentQuestion: 0, time: 30 }));
          } else {
            alert('soruları yüklenmedi tekrar deneyiniz');
          }
        }}
      >
        Teste Başla
      </Button>
    </div>
  );
};
