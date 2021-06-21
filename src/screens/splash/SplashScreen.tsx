import React, { Component } from 'react'
import { View, SafeAreaView, Text } from 'react-native'

const SplashScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Splash Screen</Text>
        </SafeAreaView>
    )
}

export default SplashScreen;