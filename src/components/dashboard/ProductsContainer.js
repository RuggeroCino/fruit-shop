import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsComponent from './ProductsComponent';

class ProductsContainer extends Component {
  render() {
    return (
      <ProductsComponent products={this.props.products} />
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsContainer;
