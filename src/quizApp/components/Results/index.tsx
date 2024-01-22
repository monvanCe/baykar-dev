import React, { useContext } from 'react';
import './index.css';
import AppContext from '../../data/AppContext';
import { Table } from 'react-bootstrap';

export const Results: React.FC = () => {
  const { data } = useContext(AppContext);

  const answers: { [key in number]: string } = {
    0: 'Boş',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
  };

  return (
    <div className="resultContainer d-flex justify-content-center align-items-center vh-100">
      <Table striped bordered hover className="w-50">
        <thead>
          <tr>
            <th>Soru</th>
            <th>Cevap</th>
          </tr>
        </thead>
        <tbody>
          {data.answers.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{answers[el]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
