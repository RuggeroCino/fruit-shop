import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

import spinner from '../../assets/icons/spinner.svg';

import ProductCardContainer from './ProductCardContainer';

const ProductsComponent = (props) => {
  return (
    <FlexContainer direction="column" style={{ width: '100%' }}>
      <BodyText title={true}>
        Products list
      </BodyText>
      <FlexContainer
        direction="row"
        justify="center"
        wrap="wrap"
      >
        {!props.isFetchingProducts ?
          props.products.map(product => (
            <ProductCardContainer
              key={product.id}
              product={product}
              onAddClick={props.onAddClick}
            />
          ))
          :
          <img
            src={spinner}
            alt="Spinner"
          />
        }
      </FlexContainer>
    </FlexContainer>
  );
};

ProductsComponent.propTypes = {
  products: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
};

export default ProductsComponent;
