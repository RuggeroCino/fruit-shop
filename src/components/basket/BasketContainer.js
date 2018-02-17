import React, { Component } from 'react';

import BasketComponent from './BasketComponent';

class BasketContainer extends Component {
  render() {
    return (
      <BasketComponent />
    );
  }
}

BasketContainer.route = '/basket';

export default BasketContainer;
