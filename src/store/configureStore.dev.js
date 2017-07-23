/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   20:34
 */
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import StockApp from '../reducers';
import { createLogger } from 'redux-logger';

const createDevStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
)(createStore);

export default function configureStore() {
  return createDevStoreWithMiddleware(StockApp);
}