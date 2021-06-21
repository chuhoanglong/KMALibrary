import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import styles from './styles';
import Image from 'react-native-fast-image';
import Row from '../utils/Row';
import { Platform } from '../../themes/platform';
import { useNavigation } from '@react-navigation/core';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';
import { dataReader } from '../reader/__mockData__';
import RippleButton from '../common/RippleButton';
import { getStatus, noImage, shadow } from '../common/Common';
import { COLORS } from '../../constants';
import moment from 'moment';

const InfoReader = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(dataReader);

    const goToDetailInfo = (bookId: any) => () => {
        navigation.navigate('BookReaderDetail', { bookId });
    }

    const renderItem = ({ item }: any) => {
        const { startTime, endTime } = item;
        return (
            <RippleButton onPress={goToDetailInfo(item.bookId)}>
                <View style={[styles.styWrapEle, shadow]}>
                    <Image source={{ uri: item.image || noImage }} resizeMode={'contain'} style={styles.styImg} />

                    <View style={styles.styWrapInfo1}>
                        <Text style={styles.styTxtDate}>Ngày mượn: {item.startTime}</Text>
                        <Text style={styles.styTxtDate}>Ngày trả: {item.endTime}</Text>
                        <Row>
                            <Text style={styles.styTxtDate}>Trạng thái: </Text>
                            <Text style={styles.styTxtDate}>{getStatus(startTime, endTime)}</Text>
                        </Row>
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

    const renderListHeaderComponent = () => {
        return (
            <View style={{ backgroundColor: COLORS.LIGHT }}>
                <Row style={{ alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://img1.kienthucvui.vn/uploads/2019/07/19/anh-the-nam-dep-nhat_111315837.jpg' }}
                        resizeMode={'contain'}
                        style={styles.styAvatar}
                    />
                    <View style={styles.styWrapInfo}>
                        <Text style={styles.styName}>
                            Họ tên: {'Chu Hoàng Long'}
                        </Text>
                        <Text style={styles.styName}>Khoá: {'2016 - 2021'}</Text>
                        <Text style={styles.styName}>Lớp: {'CT1A'}</Text>
                        <Text style={styles.styName}>Số thẻ: {'CT010122'}</Text>
                    </View>
                </Row>
                <Row style={{ marginVertical: 20 }}>
                    <IconAntDesign name={'book'} size={30} />
                    <Text style={styles.styName}> Sách đã mượn: </Text>
                </Row>
            </View >
        );
    };

    const renderListEmptyComponent = () => {
        return (
            <View style={styles.styWrapEmpty}>
                <Text style={styles.styTxtEmpty}>Hiện tại chưa có cuốn sách nào được mượn.</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                title={'Thông tin bạn đọc'}
                navigation={navigation}
            />

            <FlatList
                data={data}
                keyExtractor={(i, index) => index.toString()}
                renderItem={renderItem}
                style={styles.styWrapContent}
                ListHeaderComponent={renderListHeaderComponent}
                ListEmptyComponent={renderListEmptyComponent}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
            />

        </SafeAreaView >
    );
};

export default InfoReader;