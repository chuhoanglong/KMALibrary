import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../constants';
import { PropsFormInput } from './types';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from '../../themes/platform';
import { fontRegular } from '../../themes/fontFamily';

const FormInput = (props: PropsFormInput) => {

    const [isFocus, setIsFocus] = useState(false);

    const {
        placeholder = '',
        value = '',
        label = '',
        icon = '',
        keyboardType = 'default',
        onChangText = txt => { },
        autoFocus = false,
    } = props;

    return (
        <View style={styles.contain}>
            {label != '' && <Text style={styles.styLabel}>{label}: </Text>}
            {icon != '' && <IconAntDesign name={icon} size={30} />}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.GRAY}
                value={value}
                style={[styles.styTxtInput, isFocus ? styles.styTxtInputActive : {}]}
                onFocus={(e) => {
                    setIsFocus(true);
                }}
                onBlur={(e) => {
                    setIsFocus(false);
                }}
                onChangeText={onChangText}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
            />
        </View>
    );
};

export default React.memo(FormInput);

const styles = StyleSheet.create({
    contain: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    styTxtInput: {
        flex: 1,
        color: COLORS.BLACK,
        borderBottomColor: COLORS.GRAY,
        borderBottomWidth: 1,
        padding: Platform.SizeScale(8),
        fontSize: Platform.SizeScale(14),
        fontFamily: fontRegular,
    },
    styTxtInputActive: {
        borderBottomColor: COLORS.BLACK
    },
    styLabel: {
        fontSize: Platform.SizeScale(16),
        fontFamily: fontRegular,
        flex: 1,
    }
});