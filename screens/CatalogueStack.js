import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FeedScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Feed Screen +++👾</Text>
      <Button title="Go to Catalogue" 
        onPress={()=>navigation.navigate('Cat')}
      ></Button>
    </View>
  )
}
const CatScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Catalogue ---Screen 👾</Text>
      <Button title="Go to Settings" 
        onPress={()=>navigation.navigate('Settings')}
      ></Button>
    </View>
  )
}

const SettingScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Settings ---Screen 👾</Text>
      <Button title="Go back" 
        onPress={()=>navigation.goBack()  }
      ></Button>
    </View>
  )
}



export default function CatalogueStack (){
  const Stack = createStackNavigator();
  return(
     <Stack.Navigator screenOptions={{headerShown: false}}> 
       <Stack.Screen name='Feed' component={FeedScreen}/>
        <Stack.Screen name="Cat" component={CatScreen}/>
       <Stack.Screen name='Settings' component={SettingScreen}/>
     </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  /*return (  
    <View style={styles.container}>
      <Text>Catalogue screen 👾</Text>
    </View>
  )*/
