import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GamePiece from './GamePiece.js';
import GameRow from './GameRow.js';
import GameOver from './GameOver.js';

export default class GameBoard extends Component {
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
      var index = Math.floor(Math.random() * (6 - 0) + 0);

      var newPieces = this.state.gamepieces;
      newPieces[index] = 'mole';
      this.setState({gamepieces: newPieces});
    }, 2500);

    setTimeout(() => {
      var defaultPieces = ['hole', 'hole', 'hole', 'hole', 'hole', 'hole'];
      this.setState({gamepieces: defaultPieces});
    }, 300);
  }

  _restart = () => {
    this.setState({gameover: false});
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this._loadMole(), 3000);
    setTimeout( () => {
      this.setState({gameover: true});
    }, 20000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {

    let curIndex = 0;
    var pieces = this.state.gamepieces;
    var firstHalf = pieces.slice(0, pieces.length/2);
    var secondHalf = pieces.slice(pieces.length/2, pieces.length);

    var board = (
      <View>
        <GameRow Guac={this._guaced} indexStart={0} half={firstHalf}/>
        <GameRow Guac={this._guaced} indexStart={this.state.gamepieces.length/2} half={secondHalf}/>
      </View>
    );

    return (
      <View>
        <View style={{flex: .25}} />
        <Text style={styles.title}>Guac-a-mole!!!</Text>
        <View style={styles.board}>

          {/* Make Score component */}
          <Text>Current Score: {this.state.score} </Text>

        {this.state.gameover === true ? <GameOver restart={this._restart} /> : board}

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
