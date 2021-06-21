import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import styles from './styles';
import Image from 'react-native-fast-image';
import Row from '../utils/Row';
import { noImage, shadow } from '../common/Common';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButton from '../common/RippleButton';
import { COLORS } from '../../constants';
import { dataShelfDetail } from '../bookShelfDetail/__mockData__';

const BookReaderDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { bookId }: any = route.params;
    const book = dataShelfDetail[0];

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
            />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <ScrollView style={styles.contain} showsVerticalScrollIndicator={false}>
                    <Text style={styles.styNameBook}>{book.ten_sach}</Text>

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
                                        book.ten_tac_gia.map(
                                            (item: any, i: number) =>
                                                <Text style={styles.styNameAuthor} key={i}>{item},</Text>
                                        )
                                    }
                                </View>
                            </Row>

                            <Row style={styles.styWrapRow}>
                                <IconAntDesign name={'printer'} size={30} />
                                <Text style={styles.styNameAuthor}>{book.nha_xuat_ban}</Text>
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
                        <Text style={styles.styTxtLabel}>{book.ngay_xuat_ban}</Text>
                    </Row>

                    <Row style={styles.styWrapRow2}>
                        <Text style={styles.styTxtLabel}>Số trang: </Text>
                        <Text style={styles.styTxtLabel}>{book.so_trang}</Text>
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
                        <Text style={styles.styTxtLabel}>{book.ten_sach}</Text>
                    </Row>

                    <Row style={styles.styWrapRow2}>
                        <Text style={styles.styTxtLabel}>Thế loại: </Text>
                        <Text style={styles.styTxtLabel}>{`Sách tham khảo`}</Text>
                    </Row>

                    <Row style={styles.styWrapRow2}>
                        <Text style={styles.styTxtLabel}>Số lượng: </Text>
                        <Text style={styles.styTxtLabel}>{book.so_luong}</Text>
                    </Row>

                    <View style={{ margin: 20 }}>
                        <Row>
                            <IconAntDesign name={'codesquareo'} size={30} />
                            <Text style={styles.styTxtCmt}> Đánh giá</Text>
                        </Row>
                        <TextInput
                            placeholder={'Đánh giá tình trạng sách'}
                            placeholderTextColor={COLORS.GRAY}
                            style={[styles.styTxtCmt, styles.styInput]}
                            multiline
                        />
                    </View>

                    <Row>
                        <RippleButton
                            style={[styles.styWrapBtn2, shadow]}
                            disabled={false}
                        >
                            <View style={styles.styWrapBtn}>
                                <Text style={styles.styTxtLabel}>Trả sách</Text>
                            </View>
                        </RippleButton>
                        <RippleButton
                            style={[styles.styWrapBtn2, shadow]}
                            disabled={false}
                        >
                            <View style={styles.styWrapBtn}>
                                <Text style={styles.styTxtLabel}>Gia hạn</Text>
                            </View>
                        </RippleButton>

                    </Row>
                    <View style={{ height: 100 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default BookReaderDetail;