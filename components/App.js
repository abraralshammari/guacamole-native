import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameBoard from './GameBoard.js';
import GameOver from './GameOver.js';
import Menu from './Menu.js';

export default class App extends Component {
  state = {
    score: 0,
    gameover: false,
    holes: 0,
  };

  _setup = (num) => {
    this.setState({holes: num});
  }

  _endGame = () => {
    this.setState({gameover: true});
  }

  _restart = () => {
    this.setState({
      gameover: false,
      score: 0,
    });
  }

  _updateScore = () => {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }

  render() {
    return (
      <View>
        <View style={{flex: .25}} />
        <Text style={styles.title}>Guac-a-mole!!!</Text>
        {this.state.holes === 0 ?
          <View style={styles.board}>
            <Menu setup={this._setup} />
          </View> :
          <View style={styles.board}>

            <Text>Current Score: {this.state.score} </Text>

            {this.state.gameover === true ? <GameOver restart={this._restart} /> :
            <GameBoard updateScore={this._updateScore} holes={this.state.holes} score={this.state.score} endGame={this._endGame} />}

          </View>
        }

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
