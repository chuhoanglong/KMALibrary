import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../container/HomeContainer';
import QrCodeScreen from '../qrCode/QrCodeScreen';
import BookScreen from '../book/BookScreen';
import ReaderScreen from '../reader/ReaderScreen';
import AccountScreen from '../account/AccountScreen';
import { TAB_NAME } from './TabConfig';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonTabQrCode from './ButtonTabQrCode';
const Tab = createBottomTabNavigator();

function TabMain() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={TAB_NAME.home}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'home'} size={25} color={color} />,
                }}
            />
            <Tab.Screen
                name={TAB_NAME.book}
                component={BookScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'book'} size={25} color={color} />,
                }}
            />
            <Tab.Screen
                name={TAB_NAME.qrCode}
                component={QrCodeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'qrcode'} size={25} color={color} />,
                    tabBarButton: (props) => <ButtonTabQrCode {...props} />,
                }}
            />
            <Tab.Screen
                name={TAB_NAME.reader}
                component={ReaderScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'user'} size={25} color={color} />,
                }}
            />
            <Tab.Screen
                name={TAB_NAME.account}
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name={'bars'} size={25} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabMain;