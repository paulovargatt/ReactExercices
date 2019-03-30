import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Default from '../styles/Default'


export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
                   style={Default.input}
                   onChangeText={props.chamarQuandoMuda}
        />
    </View>

export default class TextoSincronizado extends Component {
    state = {
        text: ''
    }

    alterarTexto = text => {
        this.setState({text})
    }

    render() {
        return (
            <View>
                <Text style={Default.font40}>{this.state.text}</Text>
                <Entrada texto={this.state.text} chamarQuandoMuda={this.alterarTexto}/>
            </View>
        )
    }
}