import React from 'react';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';
import BodyText from '../../shared/BodyText';

const DashboardComponent = () => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
    >
      <Header />
      <BodyText>Dashboard</BodyText>
    </FlexContainer>
  );
};

export default DashboardComponent;
