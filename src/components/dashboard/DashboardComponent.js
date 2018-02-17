import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';
import BodyText from '../../shared/BodyText';

import ProductsContainer from './ProductsContainer';

const DashboardComponent = (props) => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
    >
      <Header />
      <FlexContainer
        padding={true}
        mainContainer={true}
        direction="column"
        align="center"
      >
        <BodyText
          uppercase={true}
          title={true}
        >Dashboard</BodyText>
        <ProductsContainer
          products={props.products}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

DashboardComponent.propTypes = {
  products: PropTypes.array.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
};

export default DashboardComponent;
