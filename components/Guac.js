import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class Guac extends Component {
  render() {
    return (
        <Image source={require('../img/guacamole.jpg')} style={this.props.style} />
    );
  }
}
