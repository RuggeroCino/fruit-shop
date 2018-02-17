import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProducts } from '../../actions/Product';
import { addProduct } from '../../actions/Basket';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  onAddClick = (product, quantity) => {
    this.props.addProduct(product.id, quantity);
  }

  render() {
    console.log(this.props.totalItems);
    return (
      <DashboardComponent
        products={this.props.products.products}
        isFetchingProducts={this.props.products.isFetchingProducts}
        onAddClick={this.onAddClick}
      />
    );
  }
}

DashboardContainer.route = '/';

DashboardContainer.propTypes = {
  products: PropTypes.object.isRequired,
  totalItems: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(
  state => ({ products: state.products }),
  dispatch => ({
    getProducts: () => dispatch(getProducts()),
    addProduct: (id, quantity) => dispatch(addProduct(id, quantity)),
  })
)(DashboardContainer);
