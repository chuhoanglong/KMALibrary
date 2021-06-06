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
import HeaderNavigation from '../../components/HeaderNavigation';
import FastImage from "react-native-fast-image";
import InputPrimary from "../../components/Input";
import SizeBoxed from "../../components/Material";
import { Body } from "./componens/Body";
import MaterialContainer from "../../components/Material";
import Loading from "../../components/Loading";
const { width, height } = Dimensions.get('window');
export default class LoginOptions extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { signIn, navigation, isSigning } = this.props;
    return (
      <MaterialContainer>
        <HeaderNavigation
          navigation={navigation}
          isShow={false}
          title="Đăng nhập"
        />
        <FastImage
          source={require('../../assets/logos/logo_login.png')}
          style={styles.widthImg} />
        <Body signIn={signIn} />
        {isSigning &&
          <Loading />
        }
      </MaterialContainer>
    );
  }
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
    marginTop: height * 0.03,
    marginBottom: 40
  }
})


