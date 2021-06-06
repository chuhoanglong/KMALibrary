import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { fontRegular, fontRegularBold } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';

const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    styAvatar: {
        width: Platform.deviceWidth / 3,
        height: (Platform.deviceWidth * 4) / 9,
    },
    styWrapContent: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    styName: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
        flex: 1,
    },
    styWrapInfo: {
        marginHorizontal: 10,
        width: Platform.deviceWidth - Platform.deviceWidth / 3 - 50,
    },
    styWrapEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.deviceHeight / 2,
    },
    styTxtEmpty: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
    },
    styWrapEle: {
        flexDirection: 'row',
        marginTop: 8,
        borderRadius: 8,
        padding: 10,
        backgroundColor: COLORS.WHITE,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styTxtNameBook: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
    },
    styWrapInfo1: {
        marginLeft: 15,
        flex: 1,
    },
    styNameAuthor: {
        fontFamily: fontRegular,
    },
    styTxtNameReader: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
        marginHorizontal: 5,
    },
    styEmpty: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
    },
    styTxtDate: {
        fontFamily: fontRegular,
    }
});

export default styles;