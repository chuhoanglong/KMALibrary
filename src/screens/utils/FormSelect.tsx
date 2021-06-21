import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { COLORS } from '../../constants';
import { PropsFormInput } from './types';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from '../../themes/platform';
import { fontRegular } from '../../themes/fontFamily';
import Modal from 'react-native-modal';
import { shadow } from '../common/Common';

const FormInput = (props: PropsFormInput) => {

    const [isVisible, setisVisible] = useState(false);

    const onOpen = () => {
        setisVisible(true);
    };

    const onClose = () => {
        setisVisible(false);
    }

    const {
        placeholder = '',
        value = '',
        label = '',
        icon = '',
        data,
    } = props;

    const handleSelect = (value: any) => () => {
        props.handleSelect && props.handleSelect(value);
        onClose();
    };

    const renderItem = ({ item }: any) => (
        <TouchableWithoutFeedback onPress={handleSelect(item)}>
            <View style={[styles.styWrapOption, shadow]}>
                <Text style={styles.styTxt}>{item.ten_ke}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <View style={styles.contain}>
            {label != '' && <Text style={styles.styLabel}>{label}: </Text>}
            {icon != '' && <IconAntDesign name={icon} size={30} />}
            <TouchableWithoutFeedback onPress={onOpen} >
                <View style={styles.styTxtInput}>
                    {value ?
                        <Text style={[styles.styPlaceholder, { color: COLORS.BLACK }]}>{value}</Text>
                        :
                        <Text style={styles.styPlaceholder}>{placeholder}</Text>
                    }
                </View>
            </TouchableWithoutFeedback>
            <Modal
                isVisible={isVisible}
                hasBackdrop={true}
                onBackdropPress={onClose}
            >
                <View style={styles.styWrapModal}>
                    <FlatList
                        data={data}
                        keyExtractor={(i, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
            </Modal>
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
    },
    styWrapOption: {
        padding: 10,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    styWrapModal: {
        backgroundColor: '#FFF',
        height: 300,
        borderRadius: 5,
    },
    styTxt: {
        fontFamily: fontRegular,
    },
    styPlaceholder: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
        fontSize: Platform.SizeScale(14),
    }
});