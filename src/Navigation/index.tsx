import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screen/Home';
import MyTabs from './bottomNavigation';
import ChatScreen from '../Screen/Chat';
import ContactList from '../Screen/ContactList'
import SplashScreen from '../Screen/SplashScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen   options={{ headerShown: false }} name="HomeScreen" component={MyTabs} />
        <Stack.Screen   options={{ headerShown: false }} name="ChatScreen" component={ChatScreen} />
        <Stack.Screen   options={{ headerShown: false }} name="ContactList" component={ContactList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;