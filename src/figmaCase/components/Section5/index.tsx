import React, { useRef } from 'react';
import './index.css';
import { SectionText } from '../SectionText';
import { ContentBox } from '../ContentBox';

import { section5Icon1 } from '../../assets/Logos/section5Icon1';
import section5Person1 from '../../assets/Images/section5Person1.png';
import { section5Icon2 } from '../../assets/Logos/section5Icon2';
import section5Person2 from '../../assets/Images/section5Person2.png';
import { section5Icon3 } from '../../assets/Logos/section5Icon3';
import section5Person3 from '../../assets/Images/section5Person3.png';
import { section5Icon4 } from '../../assets/Logos/section5Icon4';
import section5Person4 from '../../assets/Images/section5Person4.png';
import { Button } from '../Button';
import { iconLeft } from '../../assets/Icons/iconLeft';
import { iconRight } from '../../assets/Icons/iconRight';

export const Section5: React.FC = () => {
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

  const bodyRef: any = useRef();

  const scrollLeft = () => {
    let i = 0;
    let scroll = -200;

    const x = setInterval(() => {
      bodyRef.current.scrollLeft -= 5;
      i -= 5;

      i === scroll && clearInterval(x);
    }, 5);
  };

  const scrollRight = () => {
    let i = 0;
    let scroll = 200;

    const x = setInterval(() => {
      bodyRef.current.scrollLeft += 5;
      i += 5;

      i === scroll && clearInterval(x);
    }, 5);
  };

  return (
    <div className="section5Container">
      <div className="section5Header">
        <SectionText headline2="Because they love us" />
        <div className="scrollButtonsContainer">
          <Button
            iconRight={iconLeft}
            color="#78350F"
            variant="outline"
            onClick={scrollLeft}
          />
          <Button
            iconRight={iconRight}
            color="#78350F"
            variant="outline"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div className="section5Body" ref={bodyRef}>
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
      <div className="section5Background"></div>
    </div>
  );
};
