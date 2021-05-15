import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native';
import { fontRegular, fontRegularBold } from '../../../themes/fontFamily';
import { Platform } from '../../../themes/platform';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Row from '../../utils/Row';
import RippleButton from '../../common/RippleButton';
interface Props {
    data: any[];
}
const noImage = 'https://lasd.lv/public/assets/no-image.png';

const ListReader = (props: Props) => {

    const { data } = props;
    console.log("🚀 ~ file: ListReader.tsx ~ line 18 ~ ListReader ~ data", data)

    const renderItem = ({ item }: any) => {
        return (
            <RippleButton>
                <View style={styles.styWrapEle}>
                    <Image source={{ uri: item.image || noImage }} resizeMode={'contain'} style={styles.styImg} />

                    <View style={styles.styWrapInfo1}>
                        <Text style={styles.styTxtNameBook} numberOfLines={2}>{item.nameBook}</Text>
                        {item.authorName.map((item: '', i: number) => (<Text style={styles.styNameAuthor} key={i} numberOfLines={1}>{item}</Text>))}
                    </View>

                    <View style={styles.styWrapInfo1}>
                        <Row>
                            <IconAntDesign name={'user'} />
                            <Text style={styles.styTxtNameReader} numberOfLines={2}>{item.nameReader}</Text>
                        </Row>
                        <Text>Bắt đầu: {item.startTime}</Text>
                        <Text>Hạn trả: {item.endTime}</Text>
                    </View>
                </View>
            </RippleButton>
        );
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
    );
};

export default ListReader;

const styles = StyleSheet.create({
    styWrapEle: {
        flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius: 5,
        padding: 10,
    },
    styImg: {
        width: 100,
        height: 100,
    },
    styTxtNameBook: {
        fontFamily: fontRegularBold,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
    },
    styWrapInfo1: {
        marginLeft: 15,
    },
    styNameAuthor: {
        fontFamily: fontRegular,
    },
    styTxtNameReader: {
        fontFamily: fontRegular,
        fontSize: Platform.SizeScale(14),
        marginVertical: 5,
        marginHorizontal: 5,
    }
});