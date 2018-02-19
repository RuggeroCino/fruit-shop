import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import Header from '../../shared/Header';

import ProductsContainer from './ProductsContainer';

const DashboardComponent = (props) => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
      style={{marginBottom: 40}}
    >
      <Header
        totalBasketItems={props.totalBasketItems}
        onCartClick={props.onCartClick}
      />
      <FlexContainer
        padding={true}
        maxWidth={true}
        direction="column"
        align="center"
        style={{width: '100%'}}
      >
        <ProductsContainer
          products={props.products}
          onAddClick={props.onAddClick}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

DashboardComponent.propTypes = {
  products: PropTypes.array.isRequired,
  totalBasketItems: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default DashboardComponent;
