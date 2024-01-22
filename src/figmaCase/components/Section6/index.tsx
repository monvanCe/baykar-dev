import React from 'react';
import './index.css';
import { SectionText } from '../SectionText';
import { Button } from '../Button';
import { searchIcon } from '../../assets/Icons/searchIcon';
import { arrowRightIcon } from '../../assets/Icons/arrowRightIcon';
import { shieldCheckIcon } from '../../assets/Icons/shieldCheckIcon';
import { rocketIcon } from '../../assets/Icons/rocketIcon';
import { screenIcon } from '../../assets/Icons/screenIcon';
import { podcastIcon } from '../../assets/Icons/podcastIcon';
import { settingIcon } from '../../assets/Icons/settingIcon';
import { ScreenDesktop } from '../ScreenDesktop';
import Section6Image1 from '../../assets/Images/Section6Image1.png';
import Section6Image2 from '../../assets/Images/Section6Image2.png';
import Section6Image3 from '../../assets/Images/Section6Image3.png';
import { Waves } from '../../assets/Waves';

export const Section6: React.FC = () => {
  return (
    <div className="section6Container">
      <div className="section6HeaderContainer">
        <SectionText
          headline2="Grow your collection"
          text="Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus."
        />
      </div>
      <div className="section6BodyContainer">
        <div className="section6BodyButtons">
          <div className="section6ButtonContainer section6ButtonContainerShadow">
            <Button
              iconLeft={searchIcon}
              iconRight={arrowRightIcon}
              color="#0F172A"
              variant="text"
            >
              Bibendum tellus
            </Button>
          </div>
          <div className="section6ButtonContainer">
            <Button iconLeft={shieldCheckIcon} color="#0F172A" variant="text">
              Cras eget
            </Button>
          </div>
          <div className="section6ButtonContainer">
            <Button iconLeft={rocketIcon} color="#0F172A" variant="text">
              Dolor pharetra
            </Button>
          </div>
          <div className="section6ButtonContainer">
            <Button iconLeft={screenIcon} color="#0F172A" variant="text">
              Amet, Fringilla
            </Button>
          </div>
          <div className="section6ButtonContainer">
            <Button iconLeft={podcastIcon} color="#0F172A" variant="text">
              Amet nibh
            </Button>
          </div>
          <div className="section6ButtonContainer">
            <Button iconLeft={settingIcon} color="#0F172A" variant="text">
              Sed velit
            </Button>
          </div>
        </div>
        <div className="section6BodyScreens">
          <div className="section6Screen1">
            <ScreenDesktop
              circles
              image={<img src={Section6Image1} alt="section6Image1" />}
            />
          </div>
          <div className="section6Screen2">
            <ScreenDesktop
              circles
              image={<img src={Section6Image2} alt="section6Image2" />}
            />
          </div>
          <div className="section6Screen3">
            <img src={Section6Image3} alt="section6Image3" />
          </div>
        </div>
      </div>
      <div className="section6BG">{Waves}</div>
    </div>
  );
};
