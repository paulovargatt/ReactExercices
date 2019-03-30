import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Default from '../styles/Default'


function parOrImpar(num) {
    const v = num % 2 === 0 ? 'Par' : 'Impar';
    return <Text style={Default.ex}>{num }{v}</Text>
}

export default props =>
    <View>
        {parOrImpar(props.number)}
    </View>