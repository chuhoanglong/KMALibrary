import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import Search from '../utils/Search';
import ListBook from './ListBook';
import { styles } from './styles';
import { dataShelfDetail } from './__mockData__';

const BookShelfDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item }: any = route.params;
    const { nameShelf, shelfId } = item;

    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                title={nameShelf}
                navigation={navigation}
            />
            <Search
                placeholder={'Tìm kiếm sách'}
            />
            <View style={styles.styWrap}>
                <ListBook data={dataShelfDetail} />
            </View>
        </SafeAreaView>
    );
};

export default BookShelfDetail;