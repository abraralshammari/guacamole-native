import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Menu extends React.Component {
  render() {
    return(
      <View>
        <TouchableHighlight>
          <Text>3 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>6 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>9 holes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
