import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { fontRegular } from '../../themes/fontFamily';
import { Platform } from '../../themes/platform';
import RippleButtonAnim from '../anim/RippleButtonAnim';
interface Props {
    name: string,
    onPress: () => void
};

const ItemNameAuthors = (props: Props) => {
    const { name, onPress } = props;
    return (
        <View style={styles.contain}>
            <Text style={styles.styLabel} numberOfLines={1}>{name}</Text>
            <RippleButtonAnim onPress={onPress}>
                <IconAntDesign name={'minuscircleo'} size={20} />
            </RippleButtonAnim>
        </View>
    );
};

export default ItemNameAuthors;

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    styLabel: {
        fontSize: Platform.SizeScale(16),
        fontFamily: fontRegular,
        flex: 1,
        justifyContent: 'space-around',
    }
});