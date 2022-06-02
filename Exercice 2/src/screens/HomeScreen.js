import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomComponent from '../components/CustomComp'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomComponent />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})
