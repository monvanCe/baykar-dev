import React from 'react';
import './index.css';

import { HeaderBGText } from '../HeaderBGText';
import { MenuItem } from '../MenuItem';
import { HeaderText } from '../HeaderText';
import { Button } from '../Button';

export const Header = () => {
  const HeaderBGTexts = ['Products', 'Solutions', 'Pricing', 'Log In'];

  return (
    <div className="headerContainer">
      <HeaderText>Collers</HeaderText>

      <div className="headerBG">
        {HeaderBGTexts.map((el, index) => (
          <div className="menuItemContainer">
            <MenuItem key={index}>
              <HeaderBGText>{el}</HeaderBGText>
            </MenuItem>
          </div>
        ))}

        <div className="headerButtonContainer">
          <Button size="M" color="#78350F" style="outline">
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  );
};
