import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameRow from './GameRow.js';

export default class GameBoard extends React.Component {
  componentDidMount() {
    this.intervalID = setInterval(this.props.loadMole, 3000);
    setTimeout(this.props.endGame, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    let pieces = this.props.pieces;
    let firstHalf = pieces.slice(0, pieces.length/2);
    let secondHalf = pieces.slice(pieces.length/2, pieces.length);
    return(
      <View>
        <GameRow Guac={this.props.Guac} indexStart={0} half={firstHalf}/>
        <GameRow Guac={this.props.Guac} indexStart={this.props.pieces.length/2} half={secondHalf}/>
      </View>
    );
  }
}
