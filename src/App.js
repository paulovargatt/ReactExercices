import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flex' />
        <ParImpar number='109' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f5f2',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});
