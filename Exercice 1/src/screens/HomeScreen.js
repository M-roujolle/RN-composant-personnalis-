import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import FormComponent from '../components/FormComponent'

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent:'center'}}>
            <FormComponent />
      </View>
    )
}

export default HomeScreen