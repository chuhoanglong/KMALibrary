import { useNavigation } from '@react-navigation/core';
import _ from 'lodash';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Image from 'react-native-fast-image';
import { COLORS } from '../../constants';
import { fontRegular, fontRegularBold } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';
import { shadow } from '../common/Common';
import RippleButton from '../common/RippleButton';
import Row from '../utils/Row';

interface Props {
    data: {}[],
}

const noImage = 'https://lasd.lv/public/assets/no-image.png';
const ListBook = (props: Props) => {
    const navigation = useNavigation();
    const { data } = props;

    const goToDetail = (book: any) => () => {
        navigation.navigate('AppStack', { screen: 'BookInfo', params: { book } });
    }

    const renderItem = ({ item, index }: any) => {
        return (
            <RippleButton style={{ margin: 5 }} onPress={goToDetail(item)} key={index}>
                <View style={[styles.contain, shadow]}>
                    <Row>
                        <Image source={{ uri: item.image || noImage }} resizeMode={'contain'} style={styles.styImg} />
                        <View style={styles.styWrapInfo}>
                            <Text style={styles.styName}>{item.ten_sach}</Text>
                            <Text style={styles.styNameAuthor}>{item.ten_tac_gia[0]},</Text>
                        </View>
                        <View style={styles.styWrapInfo}>
                            <Text style={styles.styTxtInfo}>Số trang: {item.so_trang} tr</Text>
                            <Text style={styles.styTxtInfo}>NXB: {item.nha_xuat_ban}</Text>
                        </View>
                    </Row>
                </View>
            </RippleButton>
        );
    };

    const renderListEmptyComponent = () => {
        return (
            <View style={styles.styWrapEmpty}>
                <Text style={styles.styTxtEmpty}>Chưa có cuốn sách nào trong kệ này.</Text>
                <Text style={styles.styTxtEmpty}>Thêm Sách để dễ dàng quản lí.</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            keyExtractor={(i, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderListEmptyComponent}
            contentContainerStyle={_.isEmpty(data) && { flex: 1 }}
        />
    );
};

export default ListBook;

const styles = StyleSheet.create({
    contain: {
        borderRadius: 8,
        marginHorizontal: 10,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styWrapInfo: {
        flex: 1,
        marginHorizontal: 10,
    },
    styName: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
    },
    styNameAuthor: {
        fontFamily: fontRegular,
    },
    styTxtInfo: {
        fontFamily: fontRegular,
        color: COLORS.GRAY1,
    },
    styWrapEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styTxtEmpty: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
        fontSize: Platform.SizeScale(14),
    }
});