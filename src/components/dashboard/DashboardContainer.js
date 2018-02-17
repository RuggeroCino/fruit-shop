import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProducts } from '../../actions/Product';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <DashboardComponent
        products={this.props.products.products}
        isFetchingProducts={this.props.products.isFetchingProducts}
      />
    );
  }
}

DashboardContainer.route = '/';

DashboardContainer.propTypes = {
  products: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default connect(
  state => ({ products: state.products }),
  dispatch => ({ getProducts: () => dispatch(getProducts()) })
)(DashboardContainer);
