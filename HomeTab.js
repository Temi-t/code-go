import React from 'react';
import Feed from './screens/Feed';
import CatalogueStack from './screens/CatalogueStack.js';
//import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomeTab (){
  //const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feed" component={Feed}/>
      <BottomTab.Screen name="CatStack" component={CatalogueStack}/>
    </BottomTab.Navigator>
  )
}

    /* <Stack.Navigator> 
       <Stack.Screen name='Feed' component={Feed}/>
        <Stack.Screen name="Cat" component={Catalogue}/>
     </Stack.Navigator>
     */
