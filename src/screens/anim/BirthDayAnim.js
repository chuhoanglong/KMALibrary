import React from 'react';
import { Animated, Easing, View } from 'react-native'
import LottieView from 'lottie-react-native';

export default class Success extends React.Component {
    render() {
        return (
            <LottieView
                autoPlay
                loop
                source={require('./json/happy_birthday.json')}
                style={{ backgroundColor: 'rgba(0,0,0,0.2)', bottom: -20 }}
            />
        );
    }
}