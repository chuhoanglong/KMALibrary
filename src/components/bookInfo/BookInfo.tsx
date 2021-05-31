import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import styles from './styles';
import Image from 'react-native-fast-image';
import Row from '../utils/Row';
import { noImage, shadow } from '../common/Common';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButton from '../common/RippleButton';
import { COLORS } from '../../constants';

const BookInfo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { book }: any = route.params;

    const goToEditBook = () => {
        navigation.navigate('AddBook', { bookId: '' });
    };

    const goToBorrowBooks = () => {
        navigation.navigate('BorrowBooks');
    }

    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                title={'Thông tin sách'}
                navigation={navigation}
                isRight
                iconRight={'edit'}
                onPress={goToEditBook}
            />
            <ScrollView style={styles.contain}>
                <Text style={styles.styNameBook}>{book.nameBook}</Text>

                <Row>
                    <Image
                        source={{ uri: book.image || noImage }}
                        resizeMode={'contain'}
                        style={styles.styImage}
                    />
                    <View>
                        <Row style={styles.styWrapRow}>
                            <IconAntDesign name={'edit'} size={30} />
                            <View>
                                {
                                    book.nameAuthor.map(
                                        (item: any, i: number) =>
                                            <Text style={styles.styNameAuthor} key={i}>{item},</Text>
                                    )
                                }
                            </View>
                        </Row>

                        <Row style={styles.styWrapRow}>
                            <IconAntDesign name={'printer'} size={30} />
                            <Text style={styles.styNameAuthor}>{book.publishingCompany}</Text>
                        </Row>

                        <Row style={styles.styWrapRow}>
                            <IconAntDesign name={'barcode'} size={30} />
                            <Text style={styles.styNameAuthor}>{book.bookId}</Text>
                        </Row>

                        <Row style={styles.styWrapRow}>
                            <IconAntDesign name={'checkcircle'} size={20} color={COLORS.RED} />
                            <Text style={styles.styNameAuthor}>{`Đã mượn`}</Text>
                        </Row>
                    </View>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Ngày xuất bản: </Text>
                    <Text style={styles.styTxtLabel}>{book.publicationDate}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Số trang: </Text>
                    <Text style={styles.styTxtLabel}>{book.numberPage}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Ngôn ngữ: </Text>
                    <Text style={styles.styTxtLabel}>{`Tiếng Việt`}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Giá: </Text>
                    <Text style={styles.styTxtLabel}>{`200.000 VND`}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Series: </Text>
                    <Text style={styles.styTxtLabel}>{book.nameBook}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Thế loại: </Text>
                    <Text style={styles.styTxtLabel}>{`Sách tham khảo`}</Text>
                </Row>

                <Row style={styles.styWrapRow2}>
                    <Text style={styles.styTxtLabel}>Số lượng: </Text>
                    <Text style={styles.styTxtLabel}>{book.amount}</Text>
                </Row>

                <RippleButton
                    style={[styles.styWrapBtn2, shadow]}
                    disabled={false}
                    onPress={goToBorrowBooks}
                >
                    <View style={styles.styWrapBtn}>
                        <Text style={styles.styTxtLabel}>Cho mượn</Text>
                    </View>
                </RippleButton>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookInfo;