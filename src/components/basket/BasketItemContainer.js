import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTotalProductPrice } from '../../state/product';

import BasketItemComponent from './BasketItemComponent';

class BasketItemContainer extends Component {
  render() {
    return (
      <BasketItemComponent
        product={this.props.product}
        totalProductPrice={this.props.totalProductPrice}
        onRemoveClick={this.props.onRemoveClick}
      />
    );
  }
}

BasketItemContainer.propTypes = {
  product: PropTypes.object.isRequired,
  totalProductPrice: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
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
