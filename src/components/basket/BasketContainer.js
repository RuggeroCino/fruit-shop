import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTotalBasketItems } from '../../reducers/basket';
import {
  getBasketProducts,
  getTotalBasketPrice,
} from '../../reducers/reducers';

import DashboardContainer from '../dashboard/DashboardContainer';

import BasketComponent from './BasketComponent';

class BasketContainer extends Component {
  onBackClick = () => {
    this.props.history.push(DashboardContainer.route);
  }

  render() {
    return (
      <BasketComponent
        totalBasketItems={this.props.totalBasketItems}
        basketProducts={this.props.basketProducts}
        totalBasketPrice={this.props.totalBasketPrice}
        onBackClick={this.onBackClick}
      />
    );
  }
}

BasketContainer.route = '/basket';

BasketContainer.propTypes = {
  history: PropTypes.object.isRequired,
  totalBasketItems: PropTypes.number.isRequired,
  basketProducts: PropTypes.array.isRequired,
  totalBasketPrice: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    products: state.products,
    basketProducts: getBasketProducts(state),
    totalBasketItems: getTotalBasketItems(state.basket),
    totalBasketPrice: getTotalBasketPrice(state),
  })
)(BasketContainer);
