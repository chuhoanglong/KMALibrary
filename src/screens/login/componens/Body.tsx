import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import InputPrimary from '../../../components/Input';
import RippleButton from '../../common/RippleButton';
import { SizeBoxed } from '../../../components/Material';

interface SignInProps {
    signIn: (user: any) => void
}

export const Body = (props: SignInProps) => {
    const { signIn } = props;
    const [user, setUser] = React.useState({ email: '', password: '' });

    const onSignIn = () => {
        signIn(user);
    }

    return (
        <React.Fragment>
            <View style={styles.wrapFormInput}>
                <InputPrimary
                    value={user.email}
                    label={'Tên đăng nhập'}
                    onChangeText={(text) => setUser({ ...user, email: text })}
                />
                <SizeBoxed height={20} />
                <InputPrimary
                    value={user.password}
                    secureTextEntry={true}
                    label={'Mật khẩu'}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
            </View>
            <RippleButton
                onPress={() => onSignIn()}
                style={styles.viewLogin}
            >
                <Text style={styles.txtLogin}>Đăng nhập</Text>
            </RippleButton>
        </React.Fragment>
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