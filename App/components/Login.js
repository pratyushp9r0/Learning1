 
import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    Button, StyleSheet, Platform, Modal, TextInput} from 'react-native';
 
 export const Login = (props) => {
    const name="Ramu";
    const age=30;
    return (
      
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{ fontSize: 35, color: 'blue' }}>Login Window</Text>
        <View style={{
      justifyContent: "flex-end",
  
      padding: 20,
      width: 300,
      height: 300,
      borderRadius: 10,
      backgroundColor: 'skyblue',}}>
          <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center' }}>Login </Text>
          <Button title='Login' onPress={() => props.navigation.navigate("Home",{name:"Prabin Kumar",age:28})} />
        </View>
      </View>
    )
  }
 
  