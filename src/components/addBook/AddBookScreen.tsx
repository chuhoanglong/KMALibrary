import { useNavigation } from '@react-navigation/core';
import React from 'react';
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

const AddBookScreen = (props: PropsAddBook) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                isRight
                iconRight={'save'}
                navigation={navigation}
                title={'Thêm sách'}
            />
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'height' : 'padding'}>
                <ScrollView style={styles.styWrapContent} >
                    <View>
                        <FormInput
                            placeholder={'Tên sách'}
                        />
                        <Row style={{ justifyContent: 'space-around', marginLeft: 5, }}>
                            <FormInput
                                placeholder={'Tác giả'}
                            />
                            <RippleButton >
                                <IconAntDesign name={'plus'} size={20} />
                            </RippleButton>
                        </Row>
                    </View>
                    <Row>
                        <RippleButton>
                            <Image
                                source={{ uri: 'https://lasd.lv/public/assets/no-image.png' }}
                                resizeMode={'contain'}
                                style={styles.styImg}
                            />
                        </RippleButton>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <FormInput
                                placeholder={'Nhà xuất bản'}
                                icon={'printer'}
                            />
                            <FormInput
                                icon={'barcode'}
                                placeholder={'Mã sách 987xxxxxxxxxxx'}
                                keyboardType={'numbers-and-punctuation'}
                            />
                        </View>
                    </Row>
                    <FormInput
                        label={'Ngày xuất bản'}
                        placeholder={'Ngày-Tháng-Năm'}
                        keyboardType={'numbers-and-punctuation'}
                    />
                    <FormInput
                        label={'Số trang'}
                        placeholder={'xxx'}
                        keyboardType={'numeric'}
                    />
                    <FormInput
                        label={'Ngôn ngữ'}
                        placeholder={'Tiếng việt'}
                    />
                    <FormInput
                        label={'Giá thành'}
                        placeholder={'VND'}
                        keyboardType={'numeric'}
                    />

                    <Row>
                        <View style={{ width: '60%' }}>
                            <FormInput
                                label={'Series'}
                                placeholder={''}
                            />
                        </View>
                        <View style={{ width: '40%' }}>
                            <FormInput
                                label={'Tập'}
                                placeholder={''}
                                keyboardType={'numeric'}
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
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}

export default React.memo(AddBookScreen);