import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class Hole extends Component {
  render() {
    return (
        <Image source={require('../img/hole.jpg')}  style={this.props.style} />
    );
  }
}
