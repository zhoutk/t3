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
import { Button } from 'antd-mobile';

export default class HelloWorld extends Component {
  render() {
    const { onPress, color } = this.props;
    // const style = StyleSheet.create({
    //     color: color
    // });
      let style = {backgroundColor:color};
    return (
      <View>
        <Button onClick={onPress} style={style}>Hello World</Button>
      </View>
    )
  }
}
