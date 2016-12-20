import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import GuacImg from '../img/guac.png';

export default class Guac extends Component {
  render() {
    return (
        <Image source={GuacImg} style={this.props.style} />
    );
  }
}
