import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Keyboard
} from 'react-native';
import { COLORS } from '../../constants';
import { PropsFormDate } from './types';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from '../../themes/platform';
import { fontRegular } from '../../themes/fontFamily';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

const FormInput = (props: PropsFormDate) => {
    const {
        label = '',
        icon = '',
        placeholder = '',
        value = '',
        onChangDate,
    } = props;
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [date, setDate] = useState(value);
    const [dateV, setDateV] = useState(new Date());
    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = (dateS: any) => {
        console.warn("A date has been picked: ", dateS);
        const dateValue = moment(dateS).format('DD/MM/YYYY').toString();
        setDateV(dateS);
        setDate(dateValue);
        onChangDate(dateValue);
        hideDatePicker();
    };

    return (
        <View style={styles.contain}>
            {label != '' && <Text style={styles.styLabel}>{label}: </Text>}
            {icon != '' && <IconAntDesign name={icon} size={30} />}
            <TouchableWithoutFeedback onPress={showDatePicker}>
                <View style={styles.styTxtInput}>
                    <Text style={[styles.styTxt, { color: value ? COLORS.BLACK : COLORS.GRAY }]}>{value ? value : placeholder}</Text>
                </View>
            </TouchableWithoutFeedback>
            <DateTimePicker
                date={dateV}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                locale={'vi-VN'}
                headerTextIOS={'Ngày xuất bản'}
                cancelTextIOS={'Quay lại'}
                confirmTextIOS={'Xác nhận'}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    contain: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    styTxtInput: {
        flex: 1,
        borderBottomColor: COLORS.GRAY,
        borderBottomWidth: 1,
        padding: Platform.SizeScale(8),

    },
    styTxtInputActive: {
        borderBottomColor: COLORS.BLACK
    },
    styLabel: {
        fontSize: Platform.SizeScale(16),
        fontFamily: fontRegular,
        flex: 1,
    },
    styTxt: {
        fontSize: Platform.SizeScale(14),
        fontFamily: fontRegular,
        color: COLORS.BLACK,
    }
});