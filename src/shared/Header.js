import React from 'react';

import FlexContainer from './FlexContainer';
import BodyText from './BodyText';

import logo from '../assets/img/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <FlexContainer
      className="Header"
      justify="center"
      align="center"
    >
      <img
        src={logo}
        className="Header-logo"
        alt="logo"
      />
      <BodyText title={true}>Fruit Shop</BodyText>
    </FlexContainer>
  );
};

export default Header;
