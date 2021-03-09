import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RippleButton from './RippleButton';
import Icon from 'react-native-vector-icons/AntDesign';
import { isIphoneX } from 'react-native-iphone-x-helper';
const HeaderScreen = () => {
    return (
        <View style={styles.styWrapHeader}>
            <Text style={styles.styLogo}>KMA Library</Text>
            <RippleButton>
                <Icon name={'bells'} size={25} />
            </RippleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    styWrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        height: 90,
        paddingTop: isIphoneX() ? 60 : 40,
        paddingHorizontal: 10
    },
    styLogo: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default HeaderScreen;