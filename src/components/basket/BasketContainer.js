import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTotalBasketItems } from '../../reducers/basket';
import { getBasketProducts } from '../../reducers/reducers';

import BasketComponent from './BasketComponent';

class BasketContainer extends Component {
  render() {
    return (
      <BasketComponent
        totalBasketItems={this.props.totalBasketItems}
        basketProducts={this.props.basketProducts}
      />
    );
  }
}

BasketContainer.route = '/basket';

BasketContainer.propTypes = {
  totalBasketItems: PropTypes.number.isRequired,
  basketProducts: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    products: state.products,
    basketProducts: getBasketProducts(state),
    totalBasketItems: getTotalBasketItems(state.basket),
  })
)(BasketContainer);
