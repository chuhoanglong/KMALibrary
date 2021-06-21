import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';
import { fontRegular, fontRegularBold } from '../../../themes/fontFamily';
import { Platform } from '../../../themes/platform';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Row from '../../utils/Row';
import RippleButton from '../../common/RippleButton';
import _ from 'lodash';
import { COLORS } from '../../../constants';
import { noImage, shadow } from '../../common/Common';
import { useNavigation } from '@react-navigation/core';
interface Props {
    data: any[];
}

const ListReader = (props: Props) => {
    const navigation = useNavigation();
    const { data } = props;

    const goToDetailInfo = (item: any) => () => {
        navigation.navigate('AppStack', { screen: 'InfoReader', readerInfo: item });
    }

    const renderItem = ({ item }: any) => {
        return (
            <RippleButton
                onPress={goToDetailInfo(item)}
            >
                <View style={[styles.styWrapEle, shadow]}>
                    <Image source={{ uri: item.image || noImage }} resizeMode={'contain'} style={styles.styImg} />

                    <View style={styles.styWrapInfo1}>
                        <Row>
                            <IconAntDesign name={'user'} />
                            <Text style={styles.styTxtNameReader} numberOfLines={2}>{item.nameReader}</Text>
                        </Row>
                        <Text style={styles.styTxtDate}>Bắt đầu: {item.startTime}</Text>
                        <Text style={styles.styTxtDate}>Hạn trả: {item.endTime}</Text>
                    </View>

                    <View style={styles.styWrapInfo1}>
                        <Text style={styles.styTxtNameBook} numberOfLines={2}>{item.ten_sach}</Text>
                        {
                            item.authorName.map((item: '', i: number) => (
                                <Text style={styles.styNameAuthor} key={i} numberOfLines={1}>{item}</Text>
                            ))}
                    </View>

                </View>
            </RippleButton>
        );
    };

    const renderListEmptyComponent = () => {

        return (
            <View style={styles.styWrapEmpty}>
                <Text style={styles.styEmpty}>Hiện tại chưa có bạn đọc!</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderListEmptyComponent}
            ListFooterComponent={<View style={{ height: 50, }} />}
            style={styles.contain}
            contentContainerStyle={_.isEmpty(data) && { flex: 1 }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ListReader;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styWrapEle: {
        flexDirection: 'row',
        marginHorizontal: 8,
        marginTop: 8,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLORS.WHITE,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styTxtNameBook: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
    },
    styWrapInfo1: {
        marginLeft: 15,
        flex: 1,
    },
    styNameAuthor: {
        fontFamily: fontRegular,
    },
    styTxtNameReader: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
        marginHorizontal: 5,
    },
    styEmpty: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
    },
    styWrapEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styTxtDate: {
        fontFamily: fontRegular,
    }
});