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
const BookScreen = () => {
    const refModalFilter = useRef(null);
    return (
        <View style={styles.contain}>
            <HeaderScreen />
            <Search
                placeholder={'Tìm kiếm kệ sách'}
            />

            
            <OptionTab
                labelAdd={'Thêm sách'}
                labelFilter={'Lọc sách'}
                onPressFilter={() => {
                    refModalFilter.current.showModal();
                }}
                labelSort={'Sắp xếp'}
            />
            <ListBookShelf data={Array.from(Array(10).keys())} />
            <ModalFilter ref={refModalFilter} />
        </View>
    )
}

export default BookScreen;

const styles = StyleSheet.create({
    contain: {
        flex: 1
    }
})