import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GamePiece from './GamePiece.js';

export default class GameRow extends React.Component {
  render() {
    return (
      <View style={styles.gameRow}>
        {
          this.props.half.map( (type, index) => {
            return (
              <View>
                <GamePiece updatePiece={ () => this.props.Guac(index+this.props.indexStart)} type={type} key={index} />
              </View>
            );
          })
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
