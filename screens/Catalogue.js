import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Catalogue (){
  return (  
    <View style={styles.container}>
      <Text>Catalogue screen 👾</Text>
    </View>
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

