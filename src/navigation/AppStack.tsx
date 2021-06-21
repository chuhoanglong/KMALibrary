import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from '../screens/addBook/AddBookScreen';
import GenerationQRCode from '../screens/addBook/GenerationQRCode';
import BookShelfDetail from '../screens/bookShelfDetail/BookShelfDetail';
import BorrowBooks from '../screens/borrowBooks/BorrowBooks';
import { GESTURES_ENABLE, HEADER_ENABLE } from '../constants/Setting';
import BookInfo from '../screens/bookInfo/BookInfo';
import InfoReader from '../screens/InfoReader/InfoReader';
import BookReaderDetail from '../screens/bookReaderDetail/BookReaderDetail';
import EditBookScreen from '../screens/addBook/EditBookScreen';
import AddMember from '../components/account/AddMember'


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
      <Stack.Screen
        name="BookShelfDetail"
        component={BookShelfDetail}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="BookInfo"
        component={BookInfo}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="BorrowBooks"
        component={BorrowBooks}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="InfoReader"
        component={InfoReader}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="BookReaderDetail"
        component={BookReaderDetail}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="AddMember"
        component={AddMember}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
      <Stack.Screen
        name="EditBookScreen"
        component={EditBookScreen}
        options={{
          gestureEnabled: GESTURES_ENABLE,
          headerShown: HEADER_ENABLE
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;