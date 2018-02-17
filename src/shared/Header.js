import React from 'react';

import FlexContainer from './FlexContainer';
import BodyText from './BodyText';

import shoppingCardIcon from '../assets/icons/shopping-cart-white.svg';

import './Header.css';

const Header = () => {
  return (
    <FlexContainer
      className="Header"
    >
      <FlexContainer
        direction="column"
        maxWidth={true}
        padding={true}
        grow={1}
      >
        <FlexContainer
          grow={1}
          justify="flex-start"
        >
          <BodyText title={true}>React / Redux Fruit Shop Example</BodyText>
        </FlexContainer>
        <FlexContainer
          grow={1}
          align="center"
          justify="flex-end"
        >
          <BodyText>0</BodyText>
          <img
            src={shoppingCardIcon}
            alt="Shopping cart"
            className="Header-shopping-cart-logo"
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Header;
