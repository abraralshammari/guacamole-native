import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class GameOver extends React.Component {
  render() {
    return (
      <View>
        <Text>Game Over!</Text>
        <TouchableHighlight onPress={this.props.restart}>
          <Text>Restart?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
