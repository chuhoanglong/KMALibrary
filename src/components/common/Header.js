import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import RippleButton from './RippleButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
const HeaderScreen = (props) => {
    const { addUser, notiBell } = props;
    const navigation = useNavigation();
    const { onPressAdd } = props;
    return (
        <View style={styles.styWrapHeader}>
            <Text style={styles.styLogo}>KMA Library</Text>
            {notiBell == true ?
                <RippleButton>
                    <Icon name={'bell'} size={25} />
                </RippleButton>
                : null
            }
            {addUser == true ?
                <TouchableWithoutFeedback onPress={onPressAdd}
                >
                    <Icon name={'user-plus'} size={20} />
                </TouchableWithoutFeedback>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    styWrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        height: 90,
        paddingTop: isIphoneX() ? 60 : 40,
        paddingHorizontal: 10
    },
    styLogo: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default HeaderScreen;