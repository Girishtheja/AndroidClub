import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput, Button } from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
    <Text style={{fontWeight:'bold',fontSize:40,paddingBottom:30}}>SignUp</Text>
    <TextInput style={styles.inputs} placeholder='Full Name'></TextInput>
    <TextInput style={styles.inputs} placeholder='E-Mail Address'></TextInput>
    <TextInput secureTextEntry='true' style={[styles.inputs,{marginBottom:20}]} placeholder='Password'></TextInput>
    <Button title='SIGNUP' backgroundColor='#000' margin= '1%' color='#000'/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  inputs:{
   height:'5%',
   width:'300%',
   marginBottom:25,
   borderBottomWidth:2,
  },
});
