import { StyleSheet } from 'react-native';
import React from 'react';
import Login from './pages/Login';
import Homepage_page from './pages/Homepage_page';
import Account_page from './pages/Account_page';
import Calendar_page from './pages/Calendar_page';
import Discover_page from './pages/Discover_page';
import Friends_page from './pages/Friends_page';
import News_page from './pages/News_page';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Homepage_page" component={Homepage_page} />
        <Stack.Screen options={{headerShown: false}} name="Account_page" component={Account_page} />
        <Stack.Screen options={{headerShown: false}} name="Calendar_page" component={Calendar_page} />
        <Stack.Screen options={{headerShown: false}} name="Discover_page" component={Discover_page} />
        <Stack.Screen options={{headerShown: false}} name="Friends_page" component={Friends_page} />
        <Stack.Screen options={{headerShown: false}} name="News_page" component={News_page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
