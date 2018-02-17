import React from 'react';

import FlexContainer from './FlexContainer';
import BodyText from './BodyText';

import './Header.css';

const Header = () => {
  return (
    <FlexContainer
      className="Header"
      justify="center"
      align="center"
      padding={true}
    >
      <BodyText title={true}>React / Redux Fruit Shop Example</BodyText>
    </FlexContainer>
  );
};

export default Header;
