import React from 'react';
import './index.css';

import { HeaderBGText } from './GroupText';
import { MenuItem } from '../MenuItem';
import { HeaderText } from './HeaderText';
import { Button } from '../Button';
import { headerDropdownIcon } from '../../assets/Icons/headerDropdown';
import { Dropdown } from 'react-bootstrap';
import { CustomMenu, CustomToggle } from '../CustomDropdown';

export const Header: React.FC = () => {
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
          <Button size="M" color="#78350F" variant="outline">
            Sign up now
          </Button>
        </div>
      </div>

      <div className="headerBGMobile">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {headerDropdownIcon}
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              borderColor: '#78350F',
            }}
            as={CustomMenu}
          >
            {HeaderBGTexts.map((el, index) => (
              <div className="menuItemContainer">
                <MenuItem key={index}>
                  <HeaderBGText>{el}</HeaderBGText>
                </MenuItem>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
