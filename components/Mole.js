import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class Mole extends Component {
  render() {
    return (
        <Image source={require('../img/mole.jpg')}  style={this.props.style}/>
    );
  }
}
