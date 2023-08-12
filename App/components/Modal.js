import React, { useEffect, useState } from 'react';
import Styles from './Style';




import {
  View,

  Button,
  TextInput,

} from 'react-native';

export default UserModal=( props)=>{

  const [name, setname] = useState("");
  const [Age, setAge] = useState("");
  const [City, setCity] = useState("");

   useEffect(()=>{
    setname(props.selectData.name);
    setAge(props.selectData.Age);
    setCity(props.selectData.City);
  },[])
  
    return(
    
  <View style={Styles.centView}>
            <View style={Styles.MOdalView}>
              
              <TextInput style={Styles.input} value={name}></TextInput>
              <TextInput style={Styles.input} value={Age}></TextInput>
              <TextInput style={Styles.input} value={City}></TextInput>
              <View style={Styles.MOdalBUtton}>
              <Button title='Close ' onPress={()=>props.setDialog(false)} style={{flex:1}}/>
              <Button title='update' style={{flex:1}}/>
              </View>
            </View>
          </View>
    )
  }