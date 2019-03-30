import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Default from '../styles/Default'


export default class Evento extends Component {
    state = {
        texto: ''
    };

    alterarText = texto => {
        this.setState({ texto })
    }

    render(){
       return (
        <View>
            <Text style={Default.font40}> {this.state.texto} </Text>

            <TextInput value={this.state.texto} style={Default.input} onChangeText={this.alterarText}/>
        </View>
       )
    }
}