import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
// import HeaderScreen from '../common/Header';
import HeaderNavigation from '../HeaderNavigation';
import StyleProfile from './StyleProfile';
import { useNavigation } from "@react-navigation/core";
import Shadow from '../Shadow';
const AddMember = () => {
    const [text, setText,] = useState('');
    const navigation = useNavigation();
    const { shadowBtn } = Shadow;
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView />
            <HeaderNavigation
                navigation={navigation}
                title={'Thông tin '}
            />
            <ScrollView style={{ flex: 1, top: 16 }}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={StyleProfile.viewAvatar}>
                        {/* <Image source={require('../../assets/images/image_avatar.png')} style={{ width: 120, height: 120 }} /> */}
                        <Image source={require('../../assets/images/image_default.png')} style={{ width: 120, height: 120 }} />
                    </View>
                    <TouchableWithoutFeedback >
                        <View style={StyleProfile.add}>
                            <Image source={require('../../assets/icon/icon_add.png')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={StyleProfile.Label}>Họ tên</Text>
                        <TextInput
                            style={StyleProfile.addInput}
                            placeholderTextColor="#828282"
                            onChangeText={text => setText(text)}
                            placeholder="Họ tên"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={StyleProfile.Label}>Tên đệm</Text>
                        <TextInput
                            style={StyleProfile.addInput}
                            placeholderTextColor="#828282"
                            onChangeText={text => setText(text)}
                            placeholder="Tên đệm"
                        />
                    </View>
                </View>

                <Text style={StyleProfile.Label}>Email</Text>
                <TextInput
                    style={StyleProfile.addInput}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    placeholder="egex@gmail.com..."
                />
                <Text style={StyleProfile.Label}>Tên người dùng</Text>
                <TextInput
                    style={StyleProfile.addInput}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    placeholder="John21.."
                />
                <Text style={StyleProfile.Label}>Mật khẩu</Text>
                <TextInput
                    style={StyleProfile.addInput}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    placeholder="********"
                />
                <TouchableWithoutFeedback>
                    <View style={[StyleProfile.viewSave, shadowBtn]}>
                        <Text style={StyleProfile.txtSave}>Lưu thông tin</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export default AddMember;

