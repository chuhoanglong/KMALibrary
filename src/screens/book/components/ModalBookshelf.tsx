import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { COLORS } from '../../../constants';
import { fontRegular, fontRegularBold } from '../../../themes/fontFamily';
import { Platform } from '../../../themes/platform';
import RippleButton from '../../common/RippleButton';
import FormInput from '../../utils/FormInput';
import Row from '../../utils/Row';

interface ModalBookshelfProps {
    addBookShelf: (bookShelf: any) => void
}

const ModalBookshelf = forwardRef((props: ModalBookshelfProps, ref) => {
    const [isVisible, setisVisible] = useState(false);
    const [bookShelf, setBookShelf] = useState({
        name: ''
    });

    const showModal = () => {
        setisVisible(!isVisible);
    }

    useImperativeHandle(ref, () => ({
        showModal,
    }));

    const onSubmit = () => {
        if (bookShelf.name != '') {
            showModal();
            props.addBookShelf(bookShelf);
        }
    }

    const handleKeybroad = () => {
        Keyboard.dismiss();
    }

    return (
        <Modal visible={isVisible} transparent={true}>
            <View style={styles.contain}>
                <View style={styles.styWrapContent}>
                    <Text style={styles.styTxtTitle}>Thêm kệ sách</Text>
                    <FormInput
                        label={'Tên kệ sách'}
                        autoFocus
                        value={bookShelf.name}
                        onChangText={(value) => setBookShelf({ name: value.trimStart() })}
                    />
                    <Row style={styles.styWrapBtn}>
                        <RippleButton onPress={showModal}>
                            <View style={styles.styBtn}>
                                <Text style={styles.styTxtBtn}>Huỷ</Text>
                            </View>
                        </RippleButton>
                        <RippleButton onPress={onSubmit}>
                            <View style={styles.styBtn}>
                                <Text style={styles.styTxtBtn}>Đồng ý</Text>
                            </View>
                        </RippleButton>
                    </Row>
                </View>
            </View>
        </Modal>
    );
});

export default ModalBookshelf;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    styWrapContent: {
        width: '90%',
        minHeight: 100,
        backgroundColor: COLORS.WHITE,
        padding: 20,
        borderRadius: 10,
    },
    styTxtTitle: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(18),
    },
    styBtn: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styWrapBtn: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    },
    styTxtBtn: {
        fontFamily: fontRegular,
    }
});