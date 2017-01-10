import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameRow from './GameRow.js';

const ROW_NUM = 3;

export default class GameBoard extends React.Component {
  state = {
    pieces: [],
    defaultPieces: [],
  };

  _guaced = (index) => {
    let curPieces = this.state.pieces;
    curPieces[index] = 'guac';
    this.props.updateScore();
    this.setState({pieces: curPieces});

    this.refillHoleTimeout = setTimeout(() => {
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
    clearTimeout(this.refillHoleTimeout);
  }

  render() {
    let pieces = this.state.pieces;
    let numPortions = this.props.holes/ROW_NUM;
    let portions = [];
    for(let i=0; i<numPortions; i++){
      portions.push(pieces.slice(i*ROW_NUM, i*ROW_NUM + ROW_NUM));
    }

    return(
      <View>
        {portions.map((portion, index) => {
          return (
            <View key={index}>
              <GameRow Guac={this._guaced} indexStart={index*3} half={portion} />
            </View>
          );
        })}
      </View>
    );
  }
}
