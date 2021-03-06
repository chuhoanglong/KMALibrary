import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { Platform } from '../../themes/platform';
import { dataCategory } from '../book/__mockdata';
import HeaderComponent from '../common/HeaderComponent';
import RippleButton from '../common/RippleButton';
import FormInput from '../utils/FormInput';
import OptionSelecter from '../utils/OptionSelecter';
import Row from '../utils/Row';
import styles from './styles';
import { PropsAddBook } from './types';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import _ from 'lodash';
import FormDate from '../utils/FormDate';
import FormSelect from '../utils/FormSelect';
import ItemNameAuthors from './ItemNameAuthors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { updateBook } from '../../services/bookService';
import { getToken } from '../../utils/Helper';

const noImage = 'https://lasd.lv/public/assets/no-image.png';
const EditBookScreen = (props: PropsAddBook) => {
    const router = useRoute();
    const { book }: any = router.params;
    const { booksShelf } = useSelector((state: RootState) => state.booksShelf);
    const navigation = useNavigation();
    const [image, setImage] = useState('');
    const [ten_sach, setTenSach] = useState('');
    const [ten_tac_gia, setTenTacGia] = useState('');
    const [ten_tac_gias, setTenTacGias] = useState([]);
    const [nha_xuat_ban, setNhaXuatBan] = useState('');
    const [ngay_xuat_ban, setNgayXuatBan] = useState('');
    const [so_trang, setSoTrang] = useState('');
    const [ngon_ngu, setNgonNgu] = useState('');
    const [gia_sach, setGiaSach] = useState('');
    const [series, setSearies] = useState('');
    const [tap, setTap] = useState('');
    const [so_luong, setSoLuong] = useState('');
    const [ke_sach, setKeSach] = useState({ ten_ke: '', id: '' });
    const [the_loai, setTheLoai] = useState(dataCategory[0].value);
    const [error, setError] = useState('');

    useEffect(() => {
        const {
            image,
            ten_sach,
            ten_tac_gia,
            nha_xuat_ban,
            ngay_xuat_ban,
            so_trang,
            ngon_ngu,
            gia_sach,
            series,
            tap,
            so_luong,
            ma_ke,
            ten_ke,
            the_loai
        } = book;
        setImage(image);
        setTenSach(ten_sach);
        setTenTacGias(ten_tac_gia);
        setNhaXuatBan(nha_xuat_ban);
        setNgayXuatBan(ngay_xuat_ban);
        setSoTrang(`${so_trang}`);
        setNgonNgu(ngon_ngu);
        setGiaSach(gia_sach);
        setSearies(series);
        setTap(tap);
        setSoLuong(`${so_luong}`);
        setKeSach({ ten_ke, id: ma_ke });
        setTheLoai(the_loai);
    }, []);

    const handleSelectImage = async () => {
        setError('');
        launchImageLibrary({ mediaType: 'photo' }, async (response: any) => {
            if (response.didCancel) {
                // console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                const { uri } = response;
                setImage(uri);
            }
        });
    };

    const validate = () => {
        if (!ten_sach) {
            setError('B???n ch??a ??i???n t??n s??ch!');
            return true;
        }
        if (!ke_sach.ten_ke) {
            setError('B???n ch??a ??i???n t??n k??? s??ch!');
            return true;
        }
        if (!ten_tac_gias) {
            setError('B???n ch??a ??i???n t??n t??c gi???!');
            return true;
        }
        if (!nha_xuat_ban) {
            setError('B???n ch??a ??i???n t??n nh?? xu???t b???n!');
            return true;
        }
        if (!ngay_xuat_ban) {
            setError('B???n ch??a ??i???n ng??y xu???t b???n!');
            return true;
        }
        if (!so_trang) {
            setError('B???n ch??a ??i???n s??? trang!');
            return true;
        }
        if (!gia_sach) {
            setError('B???n ch??a ??i???n gi?? s??ch!');
            return true;
        }
        if (!the_loai) {
            setError('B???n ch??a ??i???n th??? lo???i!');
            return true;
        }
        if (!so_luong) {
            setError('B???n ch??a ??i???n s??? l?????ng!');
            return true;
        }
        return false;
    }

    const handleGenerationQRCode = async () => {
        if (validate()) return;
        const formData = {
            id: book._id,
            ten_sach: ten_sach,
            ten_ke: ke_sach.ten_ke,
            ma_ke: ke_sach.id,
            ten_tac_gia: ten_tac_gias,
            nha_xuat_ban: nha_xuat_ban,
            ngay_xuat_ban: ngay_xuat_ban,
            so_trang: so_trang,
            gia_sach: gia_sach,
            the_loai: the_loai,
            ngon_ngu: ngon_ngu,
            images: "https://m.media-amazon.com/images/I/51EWRgaqIKL.jpg",
            so_luong: so_luong,
            mo_ta: "",
            series: series,
            tap: tap,
        };
        const token = await getToken();
        const response = await updateBook(token || '', formData);
        if (response.status === 200) {
            const { message } = response;
            Alert.alert(message, '', [{
                text: 'OK',
                onPress: () => {
                    navigation.goBack();
                }
            }]);
            // navigation.navigate('GenerationQRCode', { ma_sach: book.ma_sach });
        } else {
            Alert.alert('Th??ng b??o', response.message);
        }
    }

    const handleAddAuthors = useCallback(() => {
        if (_.isEmpty(ten_tac_gia)) return;
        ten_tac_gias.push(ten_tac_gia);
        setTenTacGia('');
    }, [ten_tac_gias, ten_tac_gia]);

    const handleRemoveAuthors = useCallback((index) => {
        const ten_tac_gia_xoa = ten_tac_gias[index];
        ten_tac_gias.splice(index, 1);
        setTenTacGia(ten_tac_gia_xoa);
    }, [ten_tac_gias, setTenTacGia]);

    const handleSelectCategory = (value: any, index: number) => {
        setError('');
        setTheLoai(value);
    }

    const handleBookshelf = (value: any) => {
        setError('');
        const { ten_ke, _id } = value;
        setKeSach({ ten_ke, id: _id });
    }

    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                isRight
                iconRight={'save'}
                navigation={navigation}
                title={'S???a th??ng tin s??ch'}
                onPress={handleGenerationQRCode}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
                style={{ flex: 1 }}
            >
                {!!error && <Text style={styles.styTxtErr}>{error}</Text>}
                <ScrollView
                    style={styles.styWrapContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <FormInput
                            placeholder={'T??n s??ch'}
                            value={ten_sach}
                            onChangText={txt => {
                                setTenSach(txt);
                                setError('');
                            }}
                        />
                        <Row style={{ justifyContent: 'space-around', marginLeft: 5, }}>
                            <FormInput
                                placeholder={'T??c gi???'}
                                value={ten_tac_gia}
                                onChangText={txt => {
                                    setTenTacGia(txt);
                                    setError('');
                                }}
                            />
                            <RippleButton onPress={handleAddAuthors}>
                                <IconAntDesign name={'plus'} size={20} />
                            </RippleButton>
                        </Row>
                        {
                            !_.isEmpty(ten_tac_gias) && ten_tac_gias.map((name: any, index: any) => (<ItemNameAuthors name={name} onPress={() => handleRemoveAuthors(index)} />))
                        }
                    </View>
                    <Row>
                        <RippleButton onPress={handleSelectImage}>
                            <Image
                                source={{ uri: image || noImage }}
                                resizeMode={'contain'}
                                style={styles.styImg}
                            />
                        </RippleButton>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <FormInput
                                icon={'printer'}
                                placeholder={'Nh?? xu???t b???n'}
                                value={nha_xuat_ban}
                                onChangText={txt => {
                                    setNhaXuatBan(txt);
                                    setError('');
                                }}
                            />
                        </View>
                    </Row>
                    <FormDate
                        label={'Ng??y xu???t b???n'}
                        placeholder={'Ng??y-Th??ng-N??m'}
                        value={ngay_xuat_ban}
                        onChangDate={date => {
                            setNgayXuatBan(date);
                            setError('');
                        }}
                    />
                    <FormInput
                        label={'S??? trang'}
                        placeholder={'xxx'}
                        keyboardType={'numeric'}
                        value={so_trang}
                        onChangText={txt => {
                            setSoTrang(txt);
                            setError('');
                        }}
                    />
                    <FormInput
                        label={'Ng??n ng???'}
                        placeholder={'Ti???ng vi???t'}
                        value={ngon_ngu}
                        onChangText={txt => {
                            setNgonNgu(txt);
                            setError('');
                        }}
                    />
                    <FormInput
                        label={'Gi?? th??nh'}
                        placeholder={'VND'}
                        keyboardType={'numeric'}
                        value={gia_sach}
                        onChangText={txt => {
                            setGiaSach(txt);
                            setError('');
                        }}
                    />

                    <Row>
                        <View style={{ width: '60%' }}>
                            <FormInput
                                label={'Series'}
                                placeholder={''}
                                value={series}
                                onChangText={txt => {
                                    setSearies(txt);
                                    setError('');
                                }}
                            />
                        </View>
                        <View style={{ width: '40%' }}>
                            <FormInput
                                label={'T???p'}
                                placeholder={''}
                                keyboardType={'numeric'}
                                value={tap}
                                onChangText={txt => {
                                    setTap(txt);
                                    setError('');
                                }}
                            />
                        </View>
                    </Row>

                    <Row>
                        <RippleButton>
                            <IconAntDesign name={'plus'} size={20} />
                        </RippleButton>
                        <Text style={[styles.styLabel, { marginHorizontal: 15 }]}>Th??? lo???i: </Text>
                        <OptionSelecter
                            data={dataCategory}
                            value={the_loai}
                            icon={''}
                            onValueChange={handleSelectCategory}
                        />
                    </Row>

                    <FormInput
                        label={'S??? l?????ng'}
                        placeholder={'1'}
                        keyboardType={'numeric'}
                        value={so_luong}
                        onChangText={txt => {
                            setSoLuong(txt);
                            setError('');
                        }}
                    />

                    <FormSelect
                        label={'K??? s??ch'}
                        value={ke_sach.ten_ke}
                        handleSelect={handleBookshelf}
                        data={booksShelf}
                        placeholder={'T??n k??? s??ch'}
                    />
                    <View style={{ height: 100 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}

export default React.memo(EditBookScreen);