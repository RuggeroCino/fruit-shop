import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

import ProductCardContainer from './ProductCardContainer';

const ProductsComponent = (props) => {
  return (
    <FlexContainer direction="column" style={{width: '100%'}}>
      <BodyText title={true}>
        Products list
      </BodyText>
      <FlexContainer direction="row" wrap="wrap">
      {props.products.map(product => (
        <ProductCardContainer key={product.id} product={product} />
      ))}
      </FlexContainer>
    </FlexContainer>
  );
};

ProductsComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsComponent;
