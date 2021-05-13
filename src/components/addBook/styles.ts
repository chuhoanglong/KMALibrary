import { StyleSheet } from 'react-native';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styWrapContent: {
        padding: 20,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styLabel: {
        fontSize: Platform.SizeScale(16),
        fontFamily: fontRegular,
        flex: 1,
        justifyContent:'space-around'
    }
});

export default styles;