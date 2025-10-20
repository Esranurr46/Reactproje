import { View, Text } from 'react-native'
import React from 'react'

const Users = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data , null,2)}</Text>
    </View>
  )
}

export default Users