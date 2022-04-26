import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './screens/Feed.js';
import Catalogue from './screens/Catalogue.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function AppNavigator (){
  // const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="feed" component={Feed}/>
      <BottomTab.Screen name="catalogue" component={Catalogue}/>
    </BottomTab.Navigator>
  )
}
    {/* <Stack.Navigator> */}
    {/*   <Stack.Screen name='Feed' component={FeedScreen}/> */}
    {/* </Stack.Navigator> */}
