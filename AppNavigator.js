import React, { useContext } from 'react';
import { AuthContext } from './AuthContextProvider'
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './HomeTab';
import LoginScreen from './screens/LoginScreen';

export default function AppNavigator() {

  const Stack = createStackNavigator();
  const { hasUser } = useContext(AuthContext)
  return(
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      {
        hasUser?
        <Stack.Screen name="Home" component={HomeTab} /> :
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      }
    </Stack.Navigator>
  )
}
