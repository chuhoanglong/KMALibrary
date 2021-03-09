import React from 'react'
import { Image, StyleSheet, Text, Platform } from 'react-native';

export const renderTabBarIcon = (source) => {
    return <Image source={source} resizeMode={'contain'} />
}

export const renderTabBarLabel = ({ focused, label }) => {
    return <Text style={focused ? styles.txtLabelActive : styles.txtLabel}>{label}</Text>
}

export const isTabBarVisible = (navState) => {
    try {
        if (!navState) {
            return true;
        }
        let tabBarVisible = navState.params ? navState.params.showTabBar : true;
        return tabBarVisible;
    } catch (error) {
        return true;
    }
};

export const drawerWidth = Platform.isPad ? '50%' : '73%';

export const TAB_NAME = {
    home: 'Trang chủ',
    book: 'Kệ Sách',
    qrCode: 'Quét mã',
    reader: 'Bạn đọc',
    account: 'Tài khoản'
}

export const tabConfig = {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'initialRoute',
    allowFontScaling: true,
    lazy: true,
}

export const tabBarOptions = {
    pressColor: 'blue',
    activeTintColor: '#000000',
    inactiveTintColor: '#9b9b9b',
    labelPosition: 'below-icon',
    upperCaseLabel: false,
    showIcon: true,
    indicatorStyle: {
        height: 0,
        fontFamily: 'Nunito-Bold',
    },
    labelStyle: {
        fontSize: 13,
        fontFamily: 'Nunito-Regular',
    },
    style: {
        borderTopWidth: 0,
        borderColor: '#9b9b9b',
        backgroundColor: '#fff',
        height: 60,
        shadowColor: 'rgba(47, 47, 46, 0.3)',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 3,
    },
}

const styles = StyleSheet.create({
    txtLabel: {
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        textAlign: 'center',
        color: '#000',
        marginBottom: 3,
    },
    txtLabelActive: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 3,
    },
});