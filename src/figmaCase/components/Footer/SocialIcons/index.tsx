import React from 'react';
import './index.css';

import { youtube } from '../../../assets/Icons/youtube';
import { facebook } from '../../../assets/Icons/facebook';
import { twitter } from '../../../assets/Icons/twitter';
import { instagram } from '../../../assets/Icons/instagram';
import { linkedin } from '../../../assets/Icons/linkedin';
import { medium } from '../../../assets/Icons/medium';
import { behance } from '../../../assets/Icons/behance';
import { pinterest } from '../../../assets/Icons/pinterest';
import { dribbble } from '../../../assets/Icons/dribbble';
import { tiktok } from '../../../assets/Icons/tiktok';

interface SocialIconsProps {
  Youtube?: boolean;
  Facebook?: boolean;
  Twitter?: boolean;
  Instagram?: boolean;
  Linkedin?: boolean;
  Medium?: boolean;
  Pinterest?: boolean;
  Behance?: boolean;
  Dribbble?: boolean;
  Tiktok?: boolean;
}

export const SocialIcons: React.FC<SocialIconsProps> = (props) => {
  const {
    Youtube,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Medium,
    Pinterest,
    Behance,
    Dribbble,
    Tiktok,
  } = props;

  return (
    <div className="socialIconsContainer">
      {Youtube && youtube}
      {Facebook && facebook}
      {Twitter && twitter}
      {Instagram && instagram}
      {Linkedin && linkedin}
      {Medium && medium}
      {Pinterest && pinterest}
      {Behance && behance}
      {Dribbble && dribbble}
      {Tiktok && tiktok}
    </div>
  );
};
