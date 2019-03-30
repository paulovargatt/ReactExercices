import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import Evento from './components/Evento'
import {Avo} from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'

export default createDrawerNavigator({
    TextoSincronizado: {
        screen: TextoSincronizado,
    },

    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva'/>,
    },
    Evento: {
        screen: () => <Evento/>,
    },
    Plataformas: {
        screen: () => <Plataformas/>,
    },
    Contador: {
        screen: () => <Contador numero={90}/>,
        navigationOptions: {title: 'Contador'}
    },
    Simples: {
        screen: () => <Simples texto='Vargatt'/>,
        navigationOptions: {title: 'Simples CP'}
    },
    ParImpar: {
        screen: () => <ParImpar number={8}/>,
        navigationOptions: {title: 'Simples CP'}
    }
}, {drawerWidth: 300})