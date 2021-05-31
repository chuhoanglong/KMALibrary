import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styNameBook: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(20),
        textAlign: 'center',
        marginVertical: 10,
    },
    styImage: {
        width: Platform.deviceWidth / 3,
        height: Platform.deviceWidth / 3,
    },
    styWrapRow: {
        margin: 10,
        alignItems: 'center',
    },
    styWrapRow2: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: COLORS.GRAY,
    },
    styNameAuthor: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(16),
        marginHorizontal: 10,
    },
    styTxtLabel: {
        flex: 1,
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(16),
    },
    styTxtValue: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(16),
    },
    styWrapBtn: {
        padding: 10,
    },
    styWrapBtn2: {
        alignSelf: 'center',
        flex: 1,
        borderRadius: 8,
        marginTop: 20,
    }
});

export default styles;