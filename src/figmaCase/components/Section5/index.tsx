import React from 'react';
import './index.css';
import { SectionText } from '../SectionText';
import { rectangle12 } from '../../assets/rectangles/rectangle12';
import { ContentBox } from '../ContentBox';

import { section5Icon1 } from '../../assets/section5Icon1';
import section5Person1 from '../../assets/section5Person1.png';
import { section5Icon2 } from '../../assets/section5Icon2';
import section5Person2 from '../../assets/section5Person2.png';
import { section5Icon3 } from '../../assets/section5Icon3';
import section5Person3 from '../../assets/section5Person3.png';
import { section5Icon4 } from '../../assets/section5Icon4';
import section5Person4 from '../../assets/section5Person4.png';

export const Section5 = () => {
  const cards = [
    {
      icon: section5Icon1,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      person: section5Person1,
      name: 'Hellen Jummy',
      job: 'Team Lead',
    },
    {
      icon: section5Icon2,
      text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
      person: section5Person2,
      name: 'Hellena John',
      job: 'Co-founder',
    },
    {
      icon: section5Icon3,
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      person: section5Person3,
      name: 'David Oshodi',
      job: 'Manager',
    },
    {
      icon: section5Icon4,
      text: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
      person: section5Person4,
      name: 'Charolette Hanlin',
      job: 'CEO',
    },
  ];

  return (
    <div className="section5Container">
      <div className="section5Header">
        <SectionText headline2="Because they love us" />
      </div>
      <div className="section5Body">
        {[...cards, ...cards].map((card, index) => (
          <div className="section5ContentBoxContainer">
            <ContentBox
              key={index}
              theme="light"
              icon={card.icon}
              text={card.text}
              user={{
                image: (
                  <img src={card.person} alt={`section5Person${index + 1}`} />
                ),
                name: card.name,
                job: card.job,
              }}
            />
          </div>
        ))}
      </div>
      <div className="section5Background">{rectangle12}</div>
    </div>
  );
};
