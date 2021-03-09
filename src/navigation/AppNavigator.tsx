import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/main/Home';
import Dashboard from '../components/main/Dashboard';
import { GESTURES_ENABLE, HEADER_ENABLE } from '../constants/Setting';
import TabMain from '../components/tab-main/TabMain';
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
                name="Dashboard"
                component={Dashboard}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: HEADER_ENABLE
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: HEADER_ENABLE
                }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;