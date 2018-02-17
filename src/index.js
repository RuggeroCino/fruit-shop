import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './config/registerServiceWorker';

const renderApp = App => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}

registerServiceWorker();
