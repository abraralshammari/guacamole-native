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
        <TouchableHighlight onPress={() => this.props.setup(3)}>
          <Text>3 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(6)}>
          <Text>6 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(9)}>
          <Text>9 holes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
