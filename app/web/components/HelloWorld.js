/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:04
 */
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <div className="hello-word" onClick={onClick} style={{color: color}}>Hello World</div>
    );
  }
}
