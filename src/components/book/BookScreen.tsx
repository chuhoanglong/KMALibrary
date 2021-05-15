import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import HeaderScreen from '../common/Header';
import Search from '../utils/Search';
import OptionTab from '../utils/OptionTab';
import ListBookShelf from './ListBookShelf';
import ModalFilter from './ModalFilter';
import { useNavigation } from '@react-navigation/core';
import ModalBookshelf from './ModalBookshelf';
const BookScreen = () => {
    const refModalFilter: any = useRef();
    const refModalBookshelf: any = useRef();
    const navigation = useNavigation();
    const onPressAdd = () => {
        navigation.navigate('AppStack', { screen: 'AddBook' });
    }

    return (
        <View style={styles.contain}>
            <HeaderScreen />
            <Search
                placeholder={'Tìm kiếm kệ sách'}
            />
            <OptionTab
                labelAddKS={'Thêm kệ'}
                onPressAddKS={() => {
                    refModalBookshelf?.current?.showModal();
                }}
                labelAdd={'Thêm sách'}
                onPressAdd={onPressAdd}
                labelFilter={'Lọc sách'}
                onPressFilter={() => {
                    refModalFilter?.current?.showModal();
                }}
                labelSort={'Sắp xếp'}
            />
            <ListBookShelf data={Array.from(Array(10).keys())} />
            <ModalFilter ref={refModalFilter} />
            <ModalBookshelf ref={refModalBookshelf} />
        </View>
    )
}

export default BookScreen;

const styles = StyleSheet.create({
    contain: {
        flex: 1
    }
})