import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput
} from "react-native";
import RippleButton from "../common/RippleButton";
import styled from "styled-components";
import HeaderNavigation from '../../components/common/HeaderNavigation';
import FastImage from "react-native-fast-image";
const { width, height } = Dimensions.get('window');
export default class LoginOptions extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView />
        <HeaderNavigation
          navigation={this.props.navigation}
          isShow={false}
          title="Đăng nhập"
        />
        <FastImage source={require('../../assets/logos/logo_login.png')} style={styles.widthImg} />
        <View style={{ paddingTop: height * 0.1 }}>
          <View style={styles.formInput}>
            <Text style={styles.textTopPla}>Tên đăng nhập</Text>
            <TextInput
              placeholder='Tên đăng nhập'
              placeholderTextColor='#828282'
              style={styles.textInput}
            // value={textSearch}
            // onChangeText={this.onChangeText}
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.textTopPla}>Mật khẩu</Text>
            <TextInput
              placeholder='Mật khẩu'
              placeholderTextColor='#828282'
              style={styles.textInput}
            // value={textSearch}
            // onChangeText={this.onChangeText}
            />
          </View>
        </View>

        <RippleButton
          onPress={() => {
            this.props.signIn({});
          }}
          style={styles.viewLogin}
        >
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </RippleButton>
        <SafeAreaView />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  viewLogin: {
    backgroundColor: "#2D9CDB",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: height * 0.1
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
    marginTop: height * 0.03
  },
  formInput: {
    marginHorizontal: 16,
    marginTop: 16
  },
  textTopPla: {
    fontFamily: 'Nunito-Bold',
    color: "#000",
    bottom: 5
  },
  textInput: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 20,
    color: '#000'
  }
})


