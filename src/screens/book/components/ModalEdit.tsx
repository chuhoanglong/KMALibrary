import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../../../constants';
import { Platform } from '../../../themes/platform';
import { Modalize } from 'react-native-modalize';
import { fontRegular, fontRegularBold } from '../../../themes/fontFamily';
import Row from '../../utils/Row';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButton from '../../common/RippleButton';

interface Props {
    openEditName?: () => void;
    openDelete?: () => void;
}

const ModalEdit = forwardRef((props: Props, ref) => {

    const modalizeRef: any = useRef();

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const onClose = () => {
        modalizeRef.current?.close();
    };

    useImperativeHandle(ref, () => ({
        onOpen,
        onClose,
    }));

    const { openEditName, openDelete } = props;

    return (
        <Modalize
            ref={modalizeRef}
            modalHeight={200}
            scrollViewProps={{ scrollEnabled: false }}
        >
            <View style={styles.styModal}>
                <View style={styles.styHeader}>
                    <Text style={styles.styTitle}>Sửa kệ sách</Text>
                </View>

                <RippleButton
                    onPress={openEditName}
                >
                    <Row style={styles.styWrapEle}>
                        <IconAntDesign name={'edit'} size={25} />
                        <Text style={styles.styTxt}>Sửa tên</Text>
                    </Row>
                </RippleButton>

                <RippleButton onPress={openDelete}>
                    <Row style={styles.styWrapEle}>
                        <IconAntDesign name={'delete'} size={25} />
                        <Text style={styles.styTxt}>Xoá</Text>
                    </Row>
                </RippleButton>

            </View>
        </Modalize>
    );
});

export default React.memo(ModalEdit);

const styles = StyleSheet.create({
    contain: {
        margin: 0,
    },
    styModal: {
        padding: 20,
    },
    styTitle: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: 10,
    },
    styHeader: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY,
    },
    styTxt: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(14),
        marginHorizontal: 20,
    },
    styWrapEle: {
        padding: 10,
    }
});