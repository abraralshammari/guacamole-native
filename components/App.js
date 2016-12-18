import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameBoard from './GameBoard.js';
import GameOver from './GameOver.js';

export default class App extends Component {
  state = {
    score: 0,
    gamepieces: ['hole', 'hole', 'hole', 'hole', 'hole', 'hole'],
    gameover: false,
  };

  _guaced = (index) => {
    let curPieces = this.state.gamepieces;
    let curScore = this.state.score;
    curPieces[index] = 'guac';
    curScore+=1;
    this.setState({gamepieces: curPieces, score: curScore});
  }

  _loadMole = () => {
    setTimeout(() => {
      var index = Math.floor(Math.random() * (this.state.gamepieces.length - 0) + 0);

      var newPieces = this.state.gamepieces;
      newPieces[index] = 'mole';
      this.setState({gamepieces: newPieces});
    }, 2500);

    setTimeout(() => {
      var defaultPieces = ['hole', 'hole', 'hole', 'hole', 'hole', 'hole'];
      this.setState({gamepieces: defaultPieces});
    }, 300);
  }

  _endGame = () => {
    this.setState({gameover: true});
  }

  _restart = () => {
    this.setState({
      gameover: false,
      score: 0,
      gamepieces: ['hole', 'hole', 'hole', 'hole', 'hole', 'hole'],
    });
  }

  render() {
    return (
      <View>
        <View style={{flex: .25}} />
        <Text style={styles.title}>Guac-a-mole!!!</Text>
        <View style={styles.board}>

          {/* Make Score component */}
          <Text>Current Score: {this.state.score} </Text>

          {this.state.gameover === true ? <GameOver restart={this._restart} /> : <GameBoard loadMole={this._loadMole} Guac={this._guaced} endGame={this._endGame} pieces={this.state.gamepieces} />}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: .25,
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
  board: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameRow: {
    padding: 10,
    flexDirection: 'row',
  }

});
