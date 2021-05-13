import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Row from './Row';
import RippleButton from '../common/RippleButton';
export default class OptionTab extends Component {

    render() {
        const {
            labelAdd,
            labelFilter,
            onPressFilter,
            labelSort,
            onPressAdd
        } = this.props;
        return (
            <View style={{ alignSelf: 'flex-end' }}>
                <Row>
                    {
                        labelAdd &&
                        <RippleButton viewStyle={styles.styWrapIcon} onPress={onPressAdd}>
                            <Ionicons name={'add'} size={16} />
                            <Text style={styles.styLabel}>{labelAdd}</Text>
                        </RippleButton>
                    }
                    {
                        labelFilter &&
                        <RippleButton viewStyle={styles.styWrapIcon} onPress={onPressFilter}>
                            <AntDesign name={'filter'} size={16} />
                            <Text style={styles.styLabel}>{labelFilter}</Text>
                        </RippleButton>
                    }
                    {
                        labelSort &&
                        <RippleButton viewStyle={styles.styWrapIcon}>
                            <Ionicons name={'swap-vertical'} size={16} />
                            <Text style={styles.styLabel}>{labelSort}</Text>
                        </RippleButton>
                    }
                </Row>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    styWrapIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        width: 60,
        padding: 5
    },
    styLabel: {
        fontFamily: 'Nunito-Regular',
        fontSize: 10
    }
});