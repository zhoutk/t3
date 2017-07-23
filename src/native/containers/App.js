/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   8:56
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../styles/styles';

import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';

import {
  toggleColor
} from '../../actions/actions';

class ReactNativeWebHelloWorld extends Component {
  render() {
    const { dispatch, color, data } = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <HelloWorld
          onPress={() => dispatch(toggleColor())}
          color={color}
        />
      </View>
    )
  }
}

const select = state => state;

export default connect(select)(ReactNativeWebHelloWorld);
