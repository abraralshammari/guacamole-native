import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameRow from './GameRow.js';

export default class GameBoard extends React.Component {
  state = {
    pieces: [],
    defaultPieces: [],
  };

  _guaced = (index) => {
    let curPieces = this.state.pieces;
    let curScore = this.props.score;
    curPieces[index] = 'guac';
    curScore+=1;
    this.setState({pieces: curPieces});

    setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 500);
  }

  _loadMole = () => {
    setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 500);

    setTimeout(() => {
      let index = Math.floor(Math.random() * (this.props.holes - 0) + 0);
      let newPieces = this.state.pieces;
      newPieces[index] = 'mole';
      this.setState({pieces: newPieces});
    }, 2000);

    setTimeout(() => {
      let defaultPieces = Array(this.props.holes).fill('hole');
      this.setState({pieces: defaultPieces});
    }, 300);
  }

  componentDidMount() {
    let defaultPieces = Array(this.props.holes).fill('hole');
    this.setState({pieces: defaultPieces});
    this.intervalID = setInterval(this._loadMole, 3000);
    setTimeout(this.props.endGame, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    let pieces = this.state.pieces;
    let firstHalf = pieces.slice(0, 3);
    let secondHalf = pieces.slice(3, 6);
    let thirdHalf = pieces.slice(6, this.state.pieces.length);
    return(
      <View>
        <GameRow Guac={this._guaced} indexStart={0} half={firstHalf}/>
        <GameRow Guac={this._guaced} indexStart={3} half={secondHalf}/>
        <GameRow Guac={this._guaced} indexStart={6} half={thirdHalf}/>
      </View>
    );
  }
}
