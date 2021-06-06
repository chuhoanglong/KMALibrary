import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface InputProps {
    value: string,
    label: string,
    placeholder?: string,
    secureTextEntry?: boolean,
    error?: string,
    onChangeText: (text: string) => void
}

const InputPrimary = (props: InputProps) => {
    const { onChangeText, value, label, secureTextEntry = false, error, placeholder } = props;
    return (
        <View style={styles.formInput}>
            <Text style={styles.textTopPla}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#C4C4C4'
                autoCapitalize={'none'}
                style={styles.textInput}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
            {error != '' &&
                <Text style={styles.textInvalid}>{error}</Text>
            }
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
    },
    textInvalid: {
        color: '#e44040',
        marginHorizontal: 5,
        marginTop: 5,
    }
});