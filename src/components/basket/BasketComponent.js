import React from 'react';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';
import BodyText from '../../shared/BodyText';

const BasketComponent = () => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
    >
      <Header />
      <BodyText>Basket</BodyText>
    </FlexContainer>
  );
};

export default BasketComponent;
