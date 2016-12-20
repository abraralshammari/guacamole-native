import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import HoleImg from '../img/hole.png';

export default class Hole extends Component {
  render() {
    return (
        <Image source={HoleImg}  style={this.props.style} />
    );
  }
}
