import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface InputProps {
    value: string,
    label: string,
    onChangeText: (text: string) => void
}

const InputPrimary = (props: InputProps) => {
    const { onChangeText, value, label } = props;
    return (
        <View style={styles.formInput}>
            <Text style={styles.textTopPla}>{label}</Text>
            <TextInput
                placeholder='Tên đăng nhập'
                placeholderTextColor='#C4C4C4'
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default InputPrimary;

const styles = StyleSheet.create({
    formInput: {
        marginTop: 10
    },
    textTopPla: {
        fontFamily: 'Nunito-Bold',
        color: "#000",
        bottom: 5
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 13,
        borderRadius: 20
    }
});