import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import MoleImg from '../img/mole.jpg';

export default class Mole extends Component {
  render() {
    return (
        <Image source={MoleImg}  style={this.props.style}/>
    );
  }
}
