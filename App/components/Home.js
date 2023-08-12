import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Button, StyleSheet, Platform, Modal, TextInput} from 'react-native';

export const Home = (props) => {
    console.warn(props.route.params);
    const {name,age}=props.route.params;
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{ fontSize: 35, color: 'blue' }}>Home Screen</Text>
        <Text style={{ fontSize: 35, color: 'blue' }}>Name:{name}</Text>
        <Text style={{ fontSize: 35, color: 'blue' }}>Age:{age}</Text>
      </View>
    )
  }
  