import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
