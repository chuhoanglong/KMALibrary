import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
const Search = (props) => {
    const { placeholder, label } = props;
    return (
        <View style={styles.contain}>
            <TextInput
                placeholder={placeholder}
                style={styles.styInput}
                placeholderTextColor={'#c2c2c2'}
            />
            <IconAntDesign
                name={'search1'}
                size={23}
                style={{ marginHorizontal: 10 }}
                color={'#d2d2d2'}
            />
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#FFF'
    },
    styInput: {
        padding: 10,
        color: '#000',
        fontFamily: 'Nunito-Regular'
    }
});