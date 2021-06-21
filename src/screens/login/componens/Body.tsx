import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputPrimary from '../../../components/Input';
import RippleButton from '../../common/RippleButton';
import { SizeBoxed } from '../../../components/Material';
import { Formik } from 'formik';
import * as Yup from 'yup';


const SingInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
    password: Yup.string()
        .required('Mật khẩu không được để trống'),
});

interface SignInProps {
    signIn: (user: any) => void
}

export const Body = (props: SignInProps) => {
    const { signIn } = props;
    const [user, setUser] = React.useState({ email: '', password: '' });

    const onSignIn = (values: any) => {
        const user = {
            email: values.email,
            password: values.password
        }
        signIn({ user });
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: user.email, password: user.password }}
                onSubmit={values => onSignIn(values)}
                validationSchema={SingInSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={styles.wrapFormInput}>
                            <InputPrimary
                                value={values.email.trimStart()}
                                label={'Tên đăng nhập'}
                                placeholder={'Nhập tên đăng nhập'}
                                onChangeText={handleChange('email')}
                                error={errors.email && touched.email ? errors.email : ''}
                            />
                            <SizeBoxed height={20} />
                            <InputPrimary
                                value={values.password.trimStart()}
                                secureTextEntry={true}
                                label={'Mật khẩu'}
                                placeholder={'Nhập mật khẩu'}
                                onChangeText={handleChange('password')}
                                error={errors.password && touched.password ? errors.password : ''}
                            />
                        </View>
                        <RippleButton
                            onPress={() => handleSubmit()}
                            style={styles.viewLogin}
                        >
                            <Text style={styles.txtLogin}>Đăng nhập</Text>
                    </RippleButton>
                    </>
                )}
            </Formik>
        </React.Fragment >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    wrapFormInput: {
        marginHorizontal: 20
    },
    viewLogin: {
        backgroundColor: "#2D9CDB",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 20
    },
    txtLogin: {
        fontFamily: 'Nunito-Bold',
        color: "#fff",
        fontSize: 16,
        lineHeight: 20,
        marginVertical: 10,
        alignSelf: "center"
    },
    widthImg: {
        width: 250,
        height: 100,
        alignSelf: 'center',
        marginTop: 60,
        marginBottom: 40
    }
})