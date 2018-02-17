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
      <DashboardComponent />
    );
  }
}

DashboardContainer.route = '/';

DashboardContainer.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default connect(
  state => ({ product: state.product }),
  dispatch => ({ getProducts: () => dispatch(getProducts()) })
)(DashboardContainer);
