import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import styles from './styles';
import Image from 'react-native-fast-image';
import Row from '../utils/Row';
import { noImage, shadow } from '../common/Common';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButton from '../common/RippleButton';
import { COLORS } from '../../constants';
import RippleButtonAnim from '../anim/RippleButtonAnim';

interface BookType {
    gia_sach: string;
    images: string;
    ma_ke: string;
    ma_sach: string[];
    mo_ta: string;
    ngay_xuat_ban: string;
    ngon_ngu: string;
    nha_xuat_ban: string;
    series: string;
    so_luong: number;
    so_trang: number;
    tap: string;
    ten_ke: string;
    ten_sach: string;
    ten_sach_kd: string;
    ten_tac_gia: string[];
    the_loai: string;
    tinh_trang: string[];
    _id: string;
}

const BookInfo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { book }: BookType | any = route.params;

    const goToEditBook = useCallback(() => {
        navigation.navigate('EditBookScreen', { book });
    }, []);

    const goToBorrowBooks = useCallback(() => {
        navigation.navigate('BorrowBooks');
    }, []);

    const goToCodeBook = () => {
        const { book }: any = route.params;
        const ma_sach = book.ma_sach;
        navigation.navigate('GenerationQRCode', { ma_sach, title: 'Mã sách' });
    };

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

                        <RippleButtonAnim
                            onPress={goToCodeBook}
                        >
                            <Row style={styles.styWrapRow}>
                                <IconAntDesign name={'barcode'} size={30} />
                                <Text style={styles.styNameAuthor}>Mã sách</Text>
                            </Row>
                        </RippleButtonAnim>

                        {/* <Row style={styles.styWrapRow}>
                            <IconAntDesign name={'checkcircle'} size={20} color={COLORS.RED} />
                            <Text style={styles.styNameAuthor}>{`Đã mượn`}</Text>
                        </Row> */}
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
                    <Text style={styles.styTxtLabel}>{book.ngon_ngu}</Text>
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