import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView
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

const noImage = 'https://lasd.lv/public/assets/no-image.png';
const AddBookScreen = (props: PropsAddBook) => {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const [nameBook, setNameBook] = useState('');
  const [nameAuthor, setNameAuthor] = useState('');
  const [publishingCompany, setPublishingCompany] = useState('');
  const [bookId, setBookId] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [numberPage, setNumberPage] = useState('');
  const [language, setLanguage] = useState('');
  const [price, setPrice] = useState('');
  const [series, setSearies] = useState('');
  const [episode, setEpisode] = useState('');
  const [amount, setAmount] = useState('');

  const handleSelectImage = async () => {
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

  const handleGenerationQRCode = () => {
    const params = {
      bookId,
    };
    if (_.isEmpty(bookId)) return;
    navigation.navigate('GenerationQRCode', params);
  }

  return (
    <SafeAreaView style={styles.contain}>
      <HeaderComponent
        isRight
        iconRight={'save'}
        navigation={navigation}
        title={'Thêm sách'}
        onPress={handleGenerationQRCode}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={120}
      >
        <ScrollView
          style={styles.styWrapContent}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <FormInput
              placeholder={'Tên sách'}
              value={nameBook}
              onChangText={txt => setNameBook(txt)}
            />
            <Row style={{ justifyContent: 'space-around', marginLeft: 5, }}>
              <FormInput
                placeholder={'Tác giả'}
                value={nameAuthor}
                onChangText={txt => setNameAuthor(txt)}
              />
              <RippleButton >
                <IconAntDesign name={'plus'} size={20} />
              </RippleButton>
            </Row>
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
                value={publishingCompany}
                onChangText={txt => setPublishingCompany(txt)}
              />
              <FormInput
                icon={'barcode'}
                placeholder={'Mã sách 987xxxxxxxxxxx'}
                keyboardType={'numbers-and-punctuation'}
                value={bookId}
                onChangText={txt => setBookId(txt)}
              />
            </View>
          </Row>
          <FormInput
            label={'Ngày xuất bản'}
            placeholder={'Ngày-Tháng-Năm'}
            keyboardType={'numbers-and-punctuation'}
            value={publicationDate}
            onChangText={txt => setPublicationDate(txt)}
          />
          <FormInput
            label={'Số trang'}
            placeholder={'xxx'}
            keyboardType={'numeric'}
            value={numberPage}
            onChangText={txt => setNumberPage(txt)}
          />
          <FormInput
            label={'Ngôn ngữ'}
            placeholder={'Tiếng việt'}
            value={language}
            onChangText={txt => setLanguage(txt)}
          />
          <FormInput
            label={'Giá thành'}
            placeholder={'VND'}
            keyboardType={'numeric'}
            value={price}
            onChangText={txt => setPrice(txt)}
          />

          <Row>
            <View style={{ width: '60%' }}>
              <FormInput
                label={'Series'}
                placeholder={''}
                value={series}
                onChangText={txt => setSearies(txt)}
              />
            </View>
            <View style={{ width: '40%' }}>
              <FormInput
                label={'Tập'}
                placeholder={''}
                keyboardType={'numeric'}
                value={episode}
                onChangText={txt => setEpisode(txt)}
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
              placeholder={dataCategory[0].label}
              value={dataCategory[0].value}
              icon={''}
              onValueChange={() => { }}
            />
          </Row>

          <FormInput
            label={'Số lượng'}
            placeholder={'1'}
            keyboardType={'numeric'}
            value={amount}
            onChangText={txt => setAmount(txt)}
          />

          <FormInput
            label={'Kệ sách'}
            placeholder={'Kệ sách 01'}
            value={amount}
            onChangText={txt => setAmount(txt)}
          />
          <View style={{ height: 100 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}

export default React.memo(AddBookScreen);