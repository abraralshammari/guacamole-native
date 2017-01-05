import React, { Component } from 'react';
import {
  AsyncStorage,
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
    currentHigh: 0,
    score: 0,
    gameover: false,
    holes: 0,
  };

  _setup = (num) => {
    this.setState({holes: num});
  }

  _endGame = () => {
    // async () => {
    //   try {
    //     await AsyncStorage.setItem('highScore', this.state.score.toString());
    //   } catch (error) {
    //     console.log('Error saving data');
    //   }
    // }
    // async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('highScore');
    //     if (value !== null){
    //       this.setState({currentHigh: value});
    //     }
    //   } catch (error) {
    //     console.log('No current high score');
    //   }
    // }
    if(this.state.score > this.state.currentHigh) {
      AsyncStorage.setItem('highScore', this.state.score.toString());
    }

    AsyncStorage.getItem('highScore').then((value) => {
        this.setState({currentHigh: value});
    }).done();

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

  componentDidMount() {
    // async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('highScore');
    //     if (value !== null){
    //       this.setState({currentHigh: value});
    //     }
    //   } catch (error) {
    //     console.log('No current high score')
    //   }
    // }
    AsyncStorage.getItem('highScore').then((value) => {
        this.setState({currentHigh: value});
    }).done();
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

            <Text>Current High Score: {this.state.currentHigh} </Text>
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
