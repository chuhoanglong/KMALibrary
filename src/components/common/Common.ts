import { checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Linking, Alert } from 'react-native';

export const checkPermissionCamera = (handler) => {
    checkMultiple(Platform.select({
        ios: [PERMISSIONS.IOS.CAMERA],
        android: [PERMISSIONS.ANDROID.CAMERA]
    })).then(
        (statuses) => {
            if (Platform.OS === 'ios') {
                checkStatusPermission(
                    'Máy ảnh',
                    PERMISSIONS.IOS.CAMERA, statuses[PERMISSIONS.IOS.CAMERA], handler
                );
            } else {
                checkStatusPermission(
                    'Máy ảnh',
                    PERMISSIONS.ANDROID.CAMERA, statuses[PERMISSIONS.ANDROID.CAMERA], handler
                );
            }
        },
    );
}

export const checkStatusPermission = (name, permission, status, handler) => {
    switch (status) {
        case RESULTS.UNAVAILABLE:
            console.log(
                'This feature is not available (on this device / in this context)',
            );
            Alert.alert('Quyền truy cập', `Thiết bị của bạn không thể truy cập vào "${name}"!`);
            break;
        case RESULTS.DENIED:
            console.log(
                'The permission has not been requested / is denied but requestable',
            );
            request(permission).then((result) => {
                if (result === RESULTS.GRANTED) {
                    if (typeof (handler) == 'function') {
                        handler();
                    }
                }
            });
            break;
        case RESULTS.GRANTED:
            console.log('The permission is granted');
            if (typeof (handler) == 'function') {
                handler();
            }
            break;
        case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            Alert.alert(
                'Quyền truy cập',
                `Thiết bị của bạn đã từ chối quyền truy cập vào "${name}"!\nVui lòng cấp quyền truy cập trong cài đặt để sử dụng tính năng này`,
                [
                    {
                        text: "Huỷ",
                        style: "cancel"
                    },
                    { text: "Mở cài đặt", onPress: () => Linking.openSettings() }
                ],
                { cancelable: false });
            break;
    }
}

export const androidCameraPermissionOptions = {
    title: 'permissionCamera',
    message: 'permissionCameraMessage',
    buttonPositive: 'ok',
    buttonNegative: 'cancel',
}

export const getLinkBarCode = (value: string) => {
    return `https://barcode.tec-it.com/barcode.ashx?data=${value}&code=Code128&translate-esc=on`
}

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#FFF',
};

export const noImage = 'https://lasd.lv/public/assets/no-image.png';

export const getStatus = (startTime: any, endTime: any) => {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    const current = new Date().getTime();

    let status = '';

    if (end < current) {
        status = 'hết hạn mượn';
    } else if (end > current) {
        status = 'còn hạn mượn';
    }
    return status;
}

module.exports = {
    checkPermissionCamera,
    androidCameraPermissionOptions,
    getLinkBarCode,
    shadow,
    noImage,
    getStatus,
}