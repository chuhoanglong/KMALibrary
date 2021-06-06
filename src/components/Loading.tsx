import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]} >
            <ActivityIndicator animating={true} color={'#979797'} style={{ alignSelf: 'center' }} />
        </View>
    );
}

export default Loading;