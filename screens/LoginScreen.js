import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContextProvider';

export default function LoginScreen () {
  const { setUser } = useContext(AuthContext);
  return(
    <View style={styles.layout}>
      <Text styles={styles.title}>Login 😵‍💫</Text>
      <Button  title='login'
        onPress={()=>{
            setUser(true)
          }}
        >
      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  }
});


