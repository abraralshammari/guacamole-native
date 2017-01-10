import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Menu extends React.Component {
  render() {
    return(
      <View>
        <TouchableHighlight onPress={() => this.props.setup(3)}>
          <Text style={styles.holeText}>3 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(6)}>
          <Text style={styles.holeText}>6 holes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.setup(9)}>
          <Text style={styles.holeText}>9 holes</Text>
        </TouchableHighlight>
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
  holeText: {
    fontSize: 25,
    padding: 10,
  }

});
