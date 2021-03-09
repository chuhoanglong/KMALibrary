import React, { useRef } from "react";
import { View, Image, Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import RippleButton from "../common/RippleButton";
import styled from "styled-components";
import WebView from 'react-native-webview';

function LoginOnADFS() {
    const webview = useRef(null);


    const url = 'https://navig8-fixture-board-api.vinova.sg/Identity/Account/Login';

    return (
        <Container>
            <StatusBar barStyle={'dark-content'} />
            <WebView
                ref={webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState
                source={{ uri: url }}
                style={{ flex: 1 }}
                onMessage={(event) => {
                    let message = event.nativeEvent.data;
                    console.log(message);
                }}
                onLoadEnd={() => {
                    webview.current.postMessage("test", "*");
                }}
            />
        </Container>
    );
}

const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: #fff
`;

const Content = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

export default LoginOnADFS;
