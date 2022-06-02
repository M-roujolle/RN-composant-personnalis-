import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})


export default App