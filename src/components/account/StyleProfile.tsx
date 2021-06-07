import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const StyleProfile = StyleSheet.create({
    viewLogout: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#2d9cdb",
        marginHorizontal: 20,
        marginTop: height * 0.2,
    },
    logout: {
        fontFamily: "Nunito",
        fontSize: 14,
        lineHeight: 18,
        color: '#2d9cdb',
        alignSelf: "center",
        paddingVertical: 7
    },
    input: {
        height: 40,
        color: "#000",
        borderBottomWidth: 0.5,
        borderColor: "#828282",
        marginHorizontal: 20,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 10,
        paddingTop: 10,
    },
    viewAvatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
        overflow: "hidden",
        alignSelf: "center",
        top: 16
    },
    active: {
        backgroundColor: "#34ffb9",
        position: "absolute",
        bottom: 50,
        left: 5,
        padding: 7,
        borderRadius: 10
    },
    add: {
        alignSelf: "flex-end",
        bottom: 40,
    },
    Label: {
        fontFamily: "Nunito",
        fontSize: 14,
        lineHeight: 18,
        color: "#333",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 5
    }
});


export default StyleProfile;