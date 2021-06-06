import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface SizeBoxedProps {
    width?: number,
    height?: number
}

const SizeBoxed = (props: SizeBoxedProps) => {
    const { width, height } = props;
    return (
        <View style={{ width: width, height: height }} />
    );
}

interface MaterialContainerProps {
    children: JSX.Element
}

const MaterialContainer = (props: MaterialContainerProps) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ flex: 1 }}>
                {props.children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default MaterialContainer;

export { SizeBoxed }