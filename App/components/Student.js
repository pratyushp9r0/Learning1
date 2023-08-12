


import React, { Component } from 'react';

import {
  View,
  Text,

} from 'react-native';
class Student extends Component {

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, color: 'blue' }}>
           Student Name is:{this.props.name}</Text>

      </View>
    )
  }

}
export default Student;