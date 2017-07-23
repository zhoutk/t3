/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:17
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// dumb components
import HelloWorld from '../components/HelloWorld';
// actions
import {
  toggleColor,
} from '../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
    );
  }
}

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
