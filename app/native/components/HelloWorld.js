/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   8:44
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    const { onPress, color } = this.props;
    const style = StyleSheet.create({
      helloworld: {
        color: color,
        textAlign: 'center',
      }
    });
    return (
      <View>
        <Text onPress={onPress} style={style.helloworld}>Hello World</Text>
      </View>
    )
  }
}
