import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native'
import React from 'react'

const CustomComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1473942801008275459/q0ATdXpg_400x400.jpg',
        }}
      />
      <Text style={styles.text}>Amiens</Text>
    </View>
  )
}

export default CustomComponent

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
})
