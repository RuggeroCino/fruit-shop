import React from 'react';

import FlexContainer from './FlexContainer';
import BodyText from './BodyText';

import './Header.css';

const Header = () => {
  return (
    <FlexContainer
      className="Header"
      justify="space-between"
      align="center"
    >
      <FlexContainer
        grow={1}
        padding={true}
        maxWidth={true}
      >
        <BodyText title={true}>React / Redux Fruit Shop Example</BodyText>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Header;
