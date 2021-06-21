import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
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
import { addBook } from '../../services/bookService';
import { getToken } from '../../utils/Helper';
import { getBookShelfAction } from '../../actions/BookShelfAction';

const noImage = 'https://lasd.lv/public/assets/no-image.png';
const AddBookScreen = (props: PropsAddBook) => {
  const router = useRoute();
  const { title }: any = router.params;
  const { booksShelf } = useSelector((state: RootState) => state.booksShelf);
  const dispatch = useDispatch();
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
    if (ten_sach || ke_sach.ten_ke || ten_tac_gia || nha_xuat_ban || ngay_xuat_ban || so_trang || gia_sach || the_loai || so_luong) {
      setError('Bạn cần điền đầy đủ thông tin!');
      return true;
    }
    return false;
  }

  const handleGenerationQRCode = async () => {
    if (validate()) return;
    const formData = {
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
    const response = await addBook({ token: token || '', formData });
    if (response.status === 200) {
      const { book } = response;
      dispatch(getBookShelfAction({ token }));
      navigation.navigate('GenerationQRCode', { ma_sach: book.ma_sach });
    } else {
      Alert.alert('Thông báo', response.message);
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
        title={title || 'Thêm sách'}
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
              placeholder={'Tên sách'}
              value={ten_sach}
              onChangText={txt => {
                setTenSach(txt);
                setError('');
              }}
            />
            <Row style={{ justifyContent: 'space-around', marginLeft: 5, }}>
              <FormInput
                placeholder={'Tác giả'}
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
                placeholder={'Nhà xuất bản'}
                value={nha_xuat_ban}
                onChangText={txt => {
                  setNhaXuatBan(txt);
                  setError('');
                }}
              />
            </View>
          </Row>
          <FormDate
            label={'Ngày xuất bản'}
            placeholder={'Ngày-Tháng-Năm'}
            value={ngay_xuat_ban}
            onChangDate={date => {
              setNgayXuatBan(date);
              setError('');
            }}
          />
          <FormInput
            label={'Số trang'}
            placeholder={'xxx'}
            keyboardType={'numeric'}
            value={so_trang}
            onChangText={txt => {
              setSoTrang(txt);
              setError('');
            }}
          />
          <FormInput
            label={'Ngôn ngữ'}
            placeholder={'Tiếng việt'}
            value={ngon_ngu}
            onChangText={txt => {
              setNgonNgu(txt);
              setError('');
            }}
          />
          <FormInput
            label={'Giá thành'}
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
                label={'Tập'}
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
            <Text style={[styles.styLabel, { marginHorizontal: 15 }]}>Thể loại: </Text>
            <OptionSelecter
              data={dataCategory}
              value={the_loai}
              icon={''}
              onValueChange={handleSelectCategory}
            />
          </Row>

          <FormInput
            label={'Số lượng'}
            placeholder={'1'}
            keyboardType={'numeric'}
            value={so_luong}
            onChangText={txt => {
              setSoLuong(txt);
              setError('');
            }}
          />

          <FormSelect
            label={'Kệ sách'}
            value={ke_sach.ten_ke}
            handleSelect={handleBookshelf}
            data={booksShelf}
            placeholder={'Tên kệ sách'}
          />
          <View style={{ height: 100 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}

export default React.memo(AddBookScreen);