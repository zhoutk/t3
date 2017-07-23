import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Root from  './src/containers/Root';
import configureStore from './src/store/configureStore.js';

const store = configureStore();

class T3 extends Component {
    render() {
        return (
            <Root store={store}/>
        );
    }
}

AppRegistry.registerComponent('t3', () => T3);