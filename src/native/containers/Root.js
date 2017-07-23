/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   20:32
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PortfolioInsights from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PortfolioInsights />
      </Provider>
    )
  }
}