import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useBarcodeRead, BarcodeMaskWithOuterLayout } from '@nartc/react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { androidCameraPermissionOptions } from '../common/Common';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/core';
const { width, height } = Dimensions.get('window');
export default function QrCodeScreen() {
    const [isbarcodeRead, setbarcodeRead] = useState(true);
    const navigation = useNavigation();
    const {
        barcodeRead,
        onBarcodeRead,
        onBarcodeFinderLayoutChange,
    } = useBarcodeRead(
        isbarcodeRead,
        data => {
            if (!_.isEmpty(data)) {
                navigation.navigate('AppStack', { screen: 'InfoReader' });
                console.log('data', data);
                setbarcodeRead(false);
            }
        },
        processed => {
            console.log('processed', processed);
        },
    );
    return (
        <View style={styles.styContain}>
            {/* <StatusBar barStyle={'light-content'} /> */}
            <Text style={styles.styTxtHeader}>
                Quét mã vạch, QR code, trên bìa sách hoặc thẻ sinh viên để thực hiện tìm kiếm.
            </Text>

            <RNCamera
                androidCameraPermissionOptions={androidCameraPermissionOptions}
                style={styles.scanner}
                type={RNCamera.Constants.Type.back}
                barcodeTypes={barcodeRead ? [] : [RNCamera.Constants.BarCodeType.qr]}
                onBarCodeRead={onBarcodeRead}
                captureAudio={false}>
                <BarcodeMaskWithOuterLayout
                    barcodeTypes={barcodeRead ? [] : [RNCamera.Constants.BarCodeType.qr]}
                    maskOpacity={0.35}
                    width={width - 100}
                    height={width - 100}
                    onLayoutChange={onBarcodeFinderLayoutChange}
                    edgeRadius={10}
                />
            </RNCamera>

        </View>
    );
}

const styles = StyleSheet.create({
    scanner: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width,
        height,
        zIndex: -1
    },
    styContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styTxtHeader: {
        position: 'absolute',
        top: 100,
        width: width - 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16
    }
});