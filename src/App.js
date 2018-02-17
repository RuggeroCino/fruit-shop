import React, { Component } from 'react';

import FlexContainer from './shared/FlexContainer';
import Header from './shared/Header';
import BodyText from './shared/BodyText';

class App extends Component {
  render() {
    return (
      <FlexContainer direction="column">
        <Header />
        <BodyText>
          To get started, edit <code>src/App.js</code> and save to reload.
        </BodyText>
      </FlexContainer>
    );
  }
}

export default App;
