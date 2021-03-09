import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function (props) {
    return (
        <TouchableOpacity
            {...props}
            style={styles.styContain}
        >
            <Icon name={'qrcode'} size={25} color={props.color} />
            <Text style={styles.styTxt}>Quyét mã</Text>
        </TouchableOpacity>
    )
}

const styles = {
    styContain: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#eee',
        borderRadius: 100,
        padding: 5,
        width: 80,
        height: 80,
        marginTop: -40,
        backgroundColor: '#fff'
    },
    styTxt: {
        fontSize: 12,
    }
}