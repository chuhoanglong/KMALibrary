import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderScreen from '../common/Header';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderScreen notiBell={true}/>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}