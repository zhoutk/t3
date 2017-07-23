/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:18
 */
import React, { Component } from 'react';
import { Provider }  from 'react-redux';
import StockInsights from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StockInsights />
      </Provider>
    );
  }
}
