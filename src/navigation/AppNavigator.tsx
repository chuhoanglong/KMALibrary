import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/main/Home';
import { GESTURES_ENABLE, HEADER_ENABLE } from '../constants/Setting';
import TabMain from '../screens/tab-main/TabMain';
import AppStack from './AppStack';
const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabMain"
                component={TabMain}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: HEADER_ENABLE
                }}
            />
            <Stack.Screen
                name="AppStack"
                component={AppStack}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: HEADER_ENABLE
                }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;