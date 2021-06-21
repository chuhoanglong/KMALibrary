import { useNavigation, useRoute } from '@react-navigation/core';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { getBooksInShelf } from '../../services/bookService';
import { getToken } from '../../utils/Helper';
import HeaderComponent from '../common/HeaderComponent';
import Search from '../utils/Search';
import ListBook from './ListBook';
import { styles } from './styles';

const BookShelfDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [dataShelfDetail, setDataShelfDetail] = useState([]);
    const { item }: any = route.params;
    const { nameShelf, shelfId, _id } = item;

    const getData = async () => {
        const token = await getToken();
        const res = await getBooksInShelf({ token: token || '', ma_ke: _id });
        if (!_.isEmpty(res)) {
            const { data } = res;
            setDataShelfDetail(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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