import React from 'react';
import './index.css';
import { FooterColumn } from './Column';
import { VerticalMenu } from './VerticalMenu';
import { earthIcon } from '../../assets/Icons/earthIcon';
import { appStore } from '../../assets/appStore';
import { googlePlay } from '../../assets/googlePlay';
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerColumns">
        <FooterColumn
          title="Products"
          links={['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five']}
        />
        <FooterColumn
          title="Solutions"
          links={[
            'Brainstorming',
            'Ideation',
            'Wireframing',
            'Research',
            'Design',
          ]}
        />
        <FooterColumn
          title="Support"
          links={[
            'Contact Us',
            'Developers',
            'Documentation',
            'Integrations',
            'Reports',
          ]}
        />
        <FooterColumn
          title="Get the App"
          links={[
            appStore,
            googlePlay,
            '',
            'Follow Us',
            <SocialIcons Youtube Facebook Twitter Instagram Linkedin />,
          ]}
        />
      </div>
      <div className="footerBottom">
        <div className="footerCompanyName">
          Collers @ 2023. All rights reserved.
        </div>
        <VerticalMenu
          links={[
            'Terms',
            'Privacy',
            'Contact',
            <div
              className="d-flex justify-content-between"
              style={{ width: 50 }}
            >
              {earthIcon} EN
            </div>,
          ]}
        />
      </div>
    </div>
  );
};
