import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styWrapContent: {
        marginHorizontal: 20,
        flex: 1,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styLabel: {
        fontSize: Platform.SizeScale(16),
        fontFamily: fontRegular,
        flex: 1,
        justifyContent: 'space-around'
    },
    styTxtErr: {
        textAlign: 'center',
        color: COLORS.RED,
        fontSize: Platform.SizeScale(12),
        fontFamily: fontRegular,
    }
});

export default styles;