import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';
import FormInput from '../utils/FormInput';
import Row from '../utils/Row';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';
import { Platform } from '../../themes/platform';

const BorrowBooks = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.contain}>
            <HeaderComponent
                title={'Mượn sách'}
                navigation={navigation}
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
            >
                <ScrollView
                    style={[styles.contain, { marginHorizontal: 20 }]}
                    showsVerticalScrollIndicator={false}
                >
                    <FormInput
                        label={'Họ và tên'}
                    // disable
                    />
                    <FormInput
                        label={'Tên sách'}
                    // disable
                    />
                    <FormInput
                        label={'Kệ sách'}
                    // disable
                    />
                    <FormInput
                        label={'Kệ sách'}
                    // disable
                    />
                    <FormInput
                        label={'Ngày mượn'}
                    // disable
                    />
                    <FormInput
                        label={'Ngày trả'}
                    // disable
                    />

                    <View style={{ marginTop: 20 }}>
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

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default BorrowBooks;