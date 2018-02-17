import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../../shared/FlexContainer';
import BodyText from '../../shared/BodyText';

const ProductsComponent = (props) => {
  return (
    <FlexContainer
      direction="column"
      grow={1}
    >
      {props.products.map(product => (
        <BodyText key={product.id}>{product.name}</BodyText>
      ))
      }
    </FlexContainer>
  );
};

ProductsComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsComponent;
