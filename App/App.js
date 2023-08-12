/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */


import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Button,
  Modal,
  ScrollView,

} from 'react-native';
import Styles from './components/Style';
import UserModal from './components/Modal';


const App = () => {

  const [data, setdata] = useState([]);
    const [showDialog, setDialog] = useState(false);
    const [selectData, SetselectData] = useState(undefined);

   

  const getApiDta = async () => {
    const url = "http://10.0.2.2:3000/jadu";
    let result = await fetch(url);
    result = await result.json();
    setdata(result)

  }
  const deleteDat = async (id) => {
    const url = "http://10.0.2.2:3000/jadu";
    let result = await fetch(`${url}/${id}`, { method: "delete" });
    result = await result.json(id);
    getApiDta()
  }
  useEffect(() => { getApiDta() }, []);
  const UpdateData = (data) => {
    setDialog(true);
    SetselectData(data);
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.datawrp1}>
        <View style={{ flex: .78 }}><Text style={{ fontSize: 18 }}>Name</Text></View>
        <View style={{ flex: .78 }}><Text style={{ fontSize: 18 }}>Age</Text></View>
        <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>City</Text></View>
        <View style={{ flex: 1.40 }}><Text style={{ fontSize: 18 }}>Option</Text></View>
      </View>
      <ScrollView>
        {
          data.map((item,index) => (
            <View style={Styles.datawrp} key={index.toString()}>
              <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>{item.name}</Text></View>
              <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>{item.Age}</Text></View>
              <View style={{ flex: 1 }}><Text style={{ fontSize: 18 }}>{item.City}</Text></View>
              <View style={{ flex: 1 }}><Button onPress={() => deleteDat(item.id)} title='DELETE'></Button></View>
              <View style={{ flex: 1 }}><Button title='UPDATE' onPress={() => UpdateData(item)}></Button></View>
            </View>)
          )
        }
      </ScrollView>
      <Modal visible={showDialog} transparent={true}>
        <UserModal setDialog={setDialog} selectData={selectData} />
      </Modal>
    </View>
  );
};

export default App;