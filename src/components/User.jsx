import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const User = (props) => {
  return (
    <View>
      <Text> {JSON.stringify(props.data ,null,2)}  </Text>
    </View>
  )
}

export default User