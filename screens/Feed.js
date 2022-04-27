import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextProvider';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


export default function Feed () {
  const nav = useNavigation();
  const { setUser } = useContext(AuthContext);
  return(
    <View style={styles.container}>
      <Text>Hello there Feed Screen 😵‍💫</Text>
      <Button
        title="logout"
        onPress={()=>{setUser(false)}}
      ></Button>
      <Button  title='Go to Catalogue'
        onPress={()=>nav.navigate('Cat')}
        >
        second feed 
      </Button>
    </View>
  )
}

      //<StatusBar style="auto" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

