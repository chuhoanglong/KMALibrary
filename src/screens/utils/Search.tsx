import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { fontRegular } from '../../themes/fontFamily';
import { shadow } from '../common/Common';

interface Props {
    placeholder?: string,
    label?: string,
    onChangeText: (text: string) => void,
    value: string,
}

const Search = (props: Props) => {
    const { placeholder, label, onChangeText, value } = props;
    return (
        <View style={[styles.contain, shadow]}>
            <TextInput
                value={value}
                placeholder={placeholder}
                style={styles.styInput}
                placeholderTextColor={'#c2c2c2'}
                onChangeText={onChangeText}
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
    },
    styInput: {
        padding: 10,
        color: '#000',
        fontFamily: fontRegular,
        flex: 1,
    }
});