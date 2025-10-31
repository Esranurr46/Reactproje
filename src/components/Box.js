import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Box = ({ children ,style}) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}> {children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({ 
  box:{
     backgroundColor:'purple',
     padding:16,
     marginTop:16,

    },
  text:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',

  } 
 

})
const styles2=StyleSheet.create({
container:{
  
  marginTop:64,

 
},

})

export default Box



