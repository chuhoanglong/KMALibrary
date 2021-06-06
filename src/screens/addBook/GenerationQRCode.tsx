import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import QRCode from 'react-native-qrcode-svg';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FadeZoomAnim from '../anim/FadeZoomAnim';
import Image from 'react-native-fast-image';
import { COLORS } from '../../constants';
import { getLinkBarCode } from '../common/Common';

const GenerationQRCode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [bookIdx, setBookId] = useState('');

    useEffect(() => {
        const { bookId }: any = route.params;
        setBookId(bookId);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <HeaderComponent
                isRight
                navigation={navigation}
                title={'Thêm sách'}
                iconRight={'printer'}
            />

            <View style={styles.contain}>
                <View style={styles.styWrapSuccess}>
                    <FadeZoomAnim>
                        <IconAntDesign name={'checkcircleo'} size={60} />
                    </FadeZoomAnim>
                    <Text style={styles.styTxt}>Thêm sách thành công!</Text>
                </View>

                <QRCode
                    //QR code value
                    value={bookIdx ? bookIdx : 'NA'}
                    //size of QR Code
                    size={Platform.deviceWidth / 2}
                    //Color of the QR Code (Optional)
                    color="black"
                    //Background Color of the QR Code (Optional)
                    backgroundColor="white"
                    //Center Logo size  (Optional)
                    logoSize={30}
                    //Center Logo margin (Optional)
                    logoMargin={2}
                    //Center Logo radius (Optional)
                    logoBorderRadius={15}
                    //Center Logo background (Optional)
                    logoBackgroundColor="yellow"
                />

                <Image
                    source={{ uri: getLinkBarCode(bookIdx) }}
                    style={styles.styBarcode}
                    resizeMode={'contain'}
                />

                <Text style={styles.styTxt}>Sử dụng mã này để nhận diện sách trong thư viện.</Text>
            </View>

        </SafeAreaView>
    );
};

export default GenerationQRCode;

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    styTxt: {
        fontFamily: fontRegular,
        marginVertical: 20,
        fontSize: Platform.SizeScale(14),
    },
    styWrapSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styBarcode: {
        width: Platform.deviceWidth / 1.5,
        height: 100,
        marginTop: 10,
        backgroundColor: COLORS.WHITE,
    }
});