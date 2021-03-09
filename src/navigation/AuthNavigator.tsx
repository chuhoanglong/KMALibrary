import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GESTURES_ENABLE } from '../constants/Setting';
import LoginOptions from '../container/LoginOptionsContainer';
import LoginOnADFS from '../components/auth/LoginOnADFS';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginOptions"
                component={LoginOptions}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LoginOnADFS"
                component={LoginOnADFS}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;