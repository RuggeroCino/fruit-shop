import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsComponent from './ProductsComponent';

class ProductsContainer extends Component {
  render() {
    return (
      <ProductsComponent
        products={this.props.products}
        onAddClick={this.props.onAddClick}
        isFetchingProducts={this.props.isFetchingProducts}
      />
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
};

export default ProductsContainer;
