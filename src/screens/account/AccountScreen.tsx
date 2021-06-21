import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import HeaderScreen from '../common/Header';
import StyleProfile from './StyleProfile';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../actions/AuthAction';
import { getRefreshToken } from '../../utils/Helper';

const AccountScreen = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleLogout = async () => {
        const refreshToken = await getRefreshToken();
        dispatch(signOutAction({ token: refreshToken }));
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderScreen />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={StyleProfile.viewAvatar}>
                        <Image source={require('../../assets/images/image_avatar.png')} style={{ width: 120, height: 120 }} />
                    </View>
                    <View style={StyleProfile.active} />
                    <TouchableWithoutFeedback>
                        <View style={StyleProfile.add}>
                            <Image source={require('../../assets/icon/icon_add.png')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Text style={StyleProfile.Label}>Họ tên</Text>
                <TextInput
                    style={StyleProfile.input}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    defaultValue={"Đặng Duy Long"}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <Text style={StyleProfile.Label}>Khóa</Text>
                <TextInput
                    style={StyleProfile.input}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    defaultValue={"2016 - 2021"}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <Text style={StyleProfile.Label}>Lớp</Text>
                <TextInput
                    style={StyleProfile.input}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    defaultValue={"CT1A"}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <Text style={StyleProfile.Label}>Số thẻ</Text>
                <TextInput
                    style={StyleProfile.input}
                    placeholderTextColor="#828282"
                    onChangeText={text => setText(text)}
                    defaultValue={"CT010122"}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <TouchableWithoutFeedback onPress={handleLogout}>
                    <View style={StyleProfile.viewLogout}>
                        <Text style={StyleProfile.logout}>Đăng xuất</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export default AccountScreen;