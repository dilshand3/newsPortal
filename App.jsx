import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>App</Text>
      <AntDesign name="leftcircleo" size={24} color="black" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})