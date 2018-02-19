import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTotalProductPrice } from '../../reducers/products';

import BasketItemComponent from './BasketItemComponent';

class BasketItemContainer extends Component {
  render() {
    return (
      <BasketItemComponent
        product={this.props.product}
        totalProductPrice={this.props.totalProductPrice}
      />
    );
  }
}

BasketItemContainer.propTypes = {
  product: PropTypes.object.isRequired,
  totalProductPrice: PropTypes.number.isRequired,
};

export default connect(
  (state, props) => ({
    totalProductPrice: getTotalProductPrice(
      state.products,
      props.product.id,
      props.product.quantity,
    ),
  }),
)(BasketItemContainer);
