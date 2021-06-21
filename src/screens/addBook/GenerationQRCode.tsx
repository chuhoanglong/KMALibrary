import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import QRCode from 'react-native-qrcode-svg';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FadeZoomAnim from '../anim/FadeZoomAnim';
import Image from 'react-native-fast-image';
import { COLORS } from '../../constants';
import { getLinkBarCode } from '../common/Common';
const widthBarCode = (Platform.deviceWidth / 4) - 10;
const GenerationQRCode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [ma_sach, setMaSach] = useState([]);
    const { title }: any = route.params;

    useEffect(() => {
        const { ma_sach }: any = route.params;
        setMaSach(ma_sach);
    }, []);

    const renderItem = ({ item, index }: { item: string, index: number }) => {
        return (
            <View style={styles.styWrapItem} key={index}>
                <QRCode
                    //QR code value
                    value={item ? item : 'NA'}
                    //size of QR Code
                    size={Platform.deviceWidth / 4}
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
                    source={{ uri: getLinkBarCode(item) }}
                    style={styles.styBarcode}
                    resizeMode={'contain'}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <HeaderComponent
                isRight
                navigation={navigation}
                title={title || 'Thêm sách'}
                iconRight={'printer'}
            />

            <View style={styles.contain}>
                {!title && <View style={styles.styWrapSuccess}>
                    <FadeZoomAnim>
                        <IconAntDesign name={'checkcircleo'} size={60} />
                    </FadeZoomAnim>
                    <Text style={styles.styTxt}>Thêm sách thành công!</Text>
                </View>}

                <Text style={styles.styTxt}>Sử dụng mã này để nhận diện sách trong thư viện.</Text>

                <FlatList
                    data={ma_sach}
                    keyExtractor={(e, key) => key.toString()}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                />

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
        width: widthBarCode,
        height: 30,
        marginTop: 10,
        backgroundColor: COLORS.WHITE,
    },
    styWrapItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});