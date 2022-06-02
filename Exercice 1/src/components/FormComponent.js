import { View, Text } from 'react-native'
import React from 'react'

const FormComponent = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
        <TextInput></TextInput>
        <TouchableOpacity>
            <Text>Bouton</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FormComponent