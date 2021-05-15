import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from '../components/addBook/AddBookScreen';
import GenerationQRCode from '../components/addBook/GenerationQRCode';
import { GESTURES_ENABLE, HEADER_ENABLE } from '../constants/Setting';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="GenerationQRCode"
        component={GenerationQRCode}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;