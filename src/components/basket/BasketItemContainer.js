import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasketItemComponent from './BasketItemComponent';

class BasketItemContainer extends Component {
  render() {
    return (
      <BasketItemComponent product={this.props.product}/>
    );
  }
}

BasketItemContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default BasketItemContainer;
