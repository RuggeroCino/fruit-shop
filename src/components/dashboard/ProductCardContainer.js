import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCardComponent from './ProductCardComponent';

class ProductCardContainer extends Component {
  render() {
    return (
      <ProductCardComponent product={this.props.product} />
    );
  }
}

ProductCardContainer.route = '/basket';

ProductCardContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardContainer;
