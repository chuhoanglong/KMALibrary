import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GESTURES_ENABLE } from '../constants/Setting';
import LoginScreen from '../screens/login/Index';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginOptions"
                component={LoginScreen}
                options={{
                    gestureEnabled: GESTURES_ENABLE,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;