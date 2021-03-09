import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import HeaderScreen from '../common/Header';
import Search from '../utils/Search';

const BookScreen = () => {
    return (
        <View>
            <HeaderScreen />
            <Search
                placeholder={'Tìm kiếm kệ sách'}
            />
            <Text style={{ fontFamily: 'Nunito-Regular' }}>BookScreen</Text>
        </View>
    )
}

export default BookScreen;