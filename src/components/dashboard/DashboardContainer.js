import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProducts } from '../../state/product';
import { showNotification } from '../../state/notification';
import {
  addProduct,
  getTotalBasketItems,
} from '../../state/basket';

import BasketContainer from '../basket/BasketContainer';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
  componentWillMount() {
    if (this.props.products.products.length === 0) {
      this.props.getProducts();
    }
  }

  onAddClick = (product, quantity) => {
    if (quantity > 0) {
      this.props.addProduct(product.id, quantity);
      this.props.showNotification(`${quantity} ${product.name} added to cart`);
    }
  }

  onCartClick = () => {
    this.props.history.push(BasketContainer.route);
  }

  render() {
    return (
      <DashboardComponent
        products={this.props.products.products}
        totalBasketItems={this.props.totalBasketItems}
        onCartClick={this.onCartClick}
        isFetchingProducts={this.props.products.isFetchingProducts}
        onAddClick={this.onAddClick}
      />
    );
  }
}

DashboardContainer.route = '/';

DashboardContainer.propTypes = {
  history: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  totalBasketItems: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    products: state.products,
    totalBasketItems: getTotalBasketItems(state.basket),
  }),
  dispatch => ({
    getProducts: () => dispatch(getProducts()),
    addProduct: (id, quantity) => dispatch(addProduct(id, quantity)),
    showNotification: (message) => dispatch(showNotification(message)),
  })
)(withRouter(DashboardContainer));
