import React, { useContext, useEffect } from 'react';
import { Response } from './interfaces';
import AppContext from '../data/AppContext';

export const FetchQuestions: React.FC = () => {
  const { data, setData } = useContext(AppContext);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const json: Response[] = await response.json();

      const randomNumber = Math.floor(Math.random() * 11);

      setData((prev) => ({
        ...prev,
        questions: json.filter((d) => d.userId === randomNumber),
      }));
    };

    data?.questions?.length !== 10 && fetchAndSetData();
  }, [data?.questions?.length, setData]);

  return <></>;
};
