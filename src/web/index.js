/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   20:27
 */
import React          from 'react';
import { render }     from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root           from '../containers/Root';
import configureStore from '../store/configureStore';

// load our css

const store = configureStore();
// const rootElement = document.getElementById('root');
//
// render( <Root store={store} />, rootElement);
render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
)

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('../containers/Root', () => {
    render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
      document.getElementById('root')
    )
  });
}