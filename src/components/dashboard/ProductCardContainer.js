import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCardComponent from './ProductCardComponent';

class ProductCardContainer extends Component {
  constructor() {
    super();

    this.state = {
      quantity: null,
    };
  }

  onQuantityChange = (event) => {
    let quantity = parseInt(event.target.value, 10) || 0;
    this.setState({ quantity });
  }

  render() {
    return (
      <ProductCardComponent
        product={this.props.product}
        quantity={this.state.quantity}
        onQuantityChange={this.onQuantityChange}
        onAddClick={this.props.onAddClick}
      />
    );
  }
}

ProductCardContainer.route = '/basket';

ProductCardContainer.propTypes = {
  product: PropTypes.object.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default ProductCardContainer;
