import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProducts } from '../../actions/Product';
import { addProduct } from '../../actions/Basket';
import { showNotification } from '../../actions/Notification';
import { getTotalBasketItems } from '../../reducers/basket';

import BasketContainer from '../basket/BasketContainer';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.getProducts();
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
        basketItems={this.props.basketItems}
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
  basketItems: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    products: state.products,
    basketItems: getTotalBasketItems(state.basket),
  }),
  dispatch => ({
    getProducts: () => dispatch(getProducts()),
    addProduct: (id, quantity) => dispatch(addProduct(id, quantity)),
    showNotification: (message) => dispatch(showNotification(message)),
  })
)(withRouter(DashboardContainer));
