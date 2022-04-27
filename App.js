import 'react-native-gesture-handler';
import React from 'react';
import AuthContextProvider from './AuthContextProvider';
//import HomeTab from './HomeTab';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
    <AuthContextProvider >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

