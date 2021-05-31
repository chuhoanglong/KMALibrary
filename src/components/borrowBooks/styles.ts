import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styTxtCmt: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(16),
        color: COLORS.BLACK,
    },
    styInput: {
        borderWidth: 1,
        minHeight: 100,
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
    }
});

export default styles;