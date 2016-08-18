/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchPage from './SearchPage.js';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

// class HelloWorld extends Component {
//   render() {
//     // return React.createElement(Text, {style: styles.text}, "Hello World!");
//     return <Text style={styles.text}>Hello World (Again)</Text>;
//   }
// }

class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          // component: HelloWorld,
          component: SearchPage,
        }}/>
    );
  }
}


AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
