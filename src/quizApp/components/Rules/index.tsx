import React from 'react';
import './index.css';

export const Rules: React.FC = () => {
  return (
    <div className="bg-success h-100 p-3">
      <div className="rulesText">{`1. Quiz 10 sorudan oluşmaktadır`}</div>
      <div className="rulesText">{`2. İlk 10 saniye cevap veremezsiniz`}</div>
      <div className="rulesText">{`3. 30 saniyenin ardından soru otomatik geçmektedir`}</div>
      <div className="rulesText">{`4. Geçmiş sorulara dönüş yapamazsınız`}</div>
    </div>
  );
};
