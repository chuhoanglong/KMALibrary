import _ from "lodash";
import { Row } from "native-base";
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import { COLORS } from "../../../constants";
import { fontRegular, fontRegularBold } from "../../../themes/fontFamily";
import { Platform } from "../../../themes/platform";
import { shadow } from "../../common/Common";
import RippleButton from '../../common/RippleButton';
const { width, height } = Dimensions.get('window');
export default class ListBookShelf extends Component {

    goToBookShelfDetail = item => () => {
        this.props.navigation.navigate('AppStack', { screen: 'BookShelfDetail', params: { item } });
    }

    renderItem = ({ item }) => {
        return (
            <RippleButton
                onPress={this.goToBookShelfDetail(item)}
                style={{ margin: 10 }}
                onLongPress={this.props.onLongPress(item)}
            >
                <View style={[styles.styWrapElement, shadow]}>
                    <Text style={styles.styTxtName} numberOfLines={1}>{item.ten_ke}</Text>
                    <Row style={{ width: '100%', height: 30, }}>
                        <Text style={[styles.styTxtNumber, { flex: 1 }]} numberOfLines={1}>Tổng số sách: </Text>
                        <Text style={styles.styTxtNumber} numberOfLines={1}>{item.tong_so_sach}</Text>
                    </Row>
                    <Row style={{ width: '100%', height: 30, }}>
                        <Text style={[styles.styTxtNumber, { flex: 1 }]} numberOfLines={1}>Số sách cho mượn: </Text>
                        <Text style={styles.styTxtNumber} numberOfLines={1}>{item.da_muon}</Text>
                    </Row>
                </View>
            </RippleButton>
        );
    };

    renderListEmptyComponent() {
        return (
            <View style={styles.styWrapEmpty}>
                <Text style={styles.styTxtEmpty}>Hiện tại chưa có kệ sách nào.</Text>
                <Text style={styles.styTxtEmpty}>Hãy thêm mới kệ sách để dễ dàng quản lí.</Text>
            </View>
        );
    }

    render() {
        const { data } = this.props;
        return (
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                numColumns={2}
                ListEmptyComponent={this.renderListEmptyComponent}
                style={styles.contain}
                contentContainerStyle={_.isEmpty(data) && { flex: 1 }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 50, }} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
    },
    styWrapElement: {
        width: (width - 40) / 2,
        height: (width - 40) / 2,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
    },
    styTxtName: {
        flex: 1,
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14)
    },
    styTxtNumber: {
        fontFamily: fontRegular,
    },
    styWrapEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styTxtEmpty: {
        fontFamily: fontRegular,
        color: COLORS.GRAY,
    }
})