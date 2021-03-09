import React, { Component } from "react";
import { View, Image } from "react-native";
import RippleButton from "../common/RippleButton";
import styled from "styled-components";

function LoginOptions(props) {
  return (
    <Container
      source={require("../../assets/images/bg_login.png")}
      resizeMode={"contain"}>
      <Content>
        <Image source={require("../../assets/logos/logo_2.png")} />
        <LogoNavig8 source={require("../../assets/logos/logo_navig8.png")} />
        <RippleButton
          onPress={() => {
            props.signIn({});
          }}
          viewStyle={{
            height: 50,
            width: 208,
            backgroundColor: "#fff",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }} >
          <TextLogin>Login</TextLogin>
        </RippleButton>
      </Content>
    </Container>
  );
}

const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const LogoNavig8 = styled.Image`
  marginVertical: 30px;
`;

const TextLogin = styled.Text`
  fontFamily: Roboto-Regular;
  fontSize: 18px;
  color: #45b8ab;
`;

export default LoginOptions;
