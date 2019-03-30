import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Default from '../styles/Default'

const fonte = {style: {fontSize: 30}};

export const Filho = props =>
    <View>
        <Text {...fonte}> Filho: {props.nome} {props.sobrenome}</Text>
    </View>;

export const Pai = props =>
    <View>
        <Text {...fonte}> Pai: {props.nome} {props.sobrenome}</Text>
        {props.children}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}> Avo: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Paulo' sobrenome={props.sobrenome}>
            <Filho nome='ANA'/>
            <Filho nome='GUI'/>
            <Filho nome='Davi'/>
        </Pai>
        <Pai {...props}>
            <Filho nome='Reb'/>
            <Filho nome='renaro'/>

        </Pai>
    </View>