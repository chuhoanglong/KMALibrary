import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Platform } from '../../themes/platform';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButton from './RippleButton';
import { NavigationProp } from '@react-navigation/core';
import { fontRegular, fontRegularBold } from '../../themes/fontFamily';

interface PropsHeaderComponent {
    iconRight: string;
    isRight: boolean;
    navigation: NavigationProp<any>;
    title?: string;
}

const HeaderComponent = (props: PropsHeaderComponent) => {

    const { iconRight, isRight, title, navigation } = props;

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.contain}>
            <RippleButton onPress={goBack}>
                <IconAntDesign name={'arrowleft'} size={30} />
            </RippleButton>
            <Text style={styles.styTxtTitle}>{title}</Text>
            {isRight ?
                <RippleButton style={styles.styBtnRight}>
                    <IconAntDesign name={iconRight} size={30} />
                </RippleButton>
                :
                <View style={styles.styBtnRight} />
            }
        </View>
    );
};

export default React.memo(HeaderComponent);

const styles = StyleSheet.create({
    contain: {
        width: Platform.deviceWidth,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Platform.SizeScale(10),
        paddingHorizontal: Platform.SizeScale(20),
    },
    styBtnRight: {
        width: 30,
    },
    styTxtTitle: {
        fontSize: Platform.SizeScale(20),
        fontFamily: fontRegularBold,
    }
});