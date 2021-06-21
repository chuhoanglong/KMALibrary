import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderScreen from '../common/Header';
import Search from '../utils/Search';
import ListReader from './component/ListReader';
import { styles } from './styles';
import { PropsReader } from './types';
import { dataReader } from './__mockData__';

const ReaderScreen = (props: PropsReader) => {
    return (
        <View style={styles.contain}>
            <HeaderScreen />
            <Search
                placeholder={'Tìm kiếm bạn đọc'}
            />

            <ListReader
                data={dataReader}
            />

        </View>
    )
}

export default ReaderScreen;