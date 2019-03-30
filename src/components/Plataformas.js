import React, {Component} from 'react';
import {Platform, Button, ToastAndroid, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }
    }

    return (
        <View style={{padding: 50}}>
            <Button style={{padding: 150}} title='Plataforma' onPress={() => notificar('Parabéns')}/>
        </View>
    )
}