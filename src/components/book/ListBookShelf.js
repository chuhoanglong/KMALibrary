import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import RippleButton from '../common/RippleButton';
const { width, height } = Dimensions.get('window');
export default class ListBookShelf extends Component {


    renderItem = ({ item }) => {

        return (
            <RippleButton style={styles.styWrapElement}>
                <Text>Kệ sách số {item}</Text>
            </RippleButton>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <View style={styles.contain}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    numColumns={2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        alignItems: 'center',
        flex: 1,
    },
    styWrapElement: {
        width: (width - 40) / 2,
        height: (width - 40) / 2,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 10,
        borderRadius: 5,
    }
})