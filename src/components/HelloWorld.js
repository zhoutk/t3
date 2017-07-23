/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:04
 */
import React, { Component } from 'react';
import { Button } from 'antdm';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <Button className="hello-word" onClick={onClick} style={{backgroundColor: color}}>Hello  World</Button>

    );
  }
}
