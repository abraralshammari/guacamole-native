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
    gameover: false,
  };

  _endGame = () => {
    this.setState({gameover: true});
  }

  _restart = () => {
    this.setState({
      gameover: false,
      score: 0,
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

          {this.state.gameover === true ? <GameOver restart={this._restart} /> : <GameBoard holes={9} score={this.state.score} endGame={this._endGame} />}

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
