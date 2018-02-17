import React, { Component } from 'react';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends Component {
  render() {
    return (
      <DashboardComponent />
    );
  }
}

DashboardContainer.route = '/';

export default DashboardContainer;
