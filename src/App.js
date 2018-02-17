import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FlexContainer from './shared/FlexContainer';

import DashboardContainer from './components/dashboard/DashboardContainer';
import BasketContainer from './components/basket/BasketContainer';
import Notification from './shared/Notification';

class App extends Component {
  render() {
    return (
      <FlexContainer style={{ minHeight: '100vh' }}>
        <Router>
          <Switch>
            <Route exact path={DashboardContainer.route} component={DashboardContainer} />
            <Route path={BasketContainer.route} component={BasketContainer} />
          </Switch>
        </Router>
        <Notification />
      </FlexContainer>
    );
  }
}

export default App;
