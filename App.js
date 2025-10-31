import { View, Text , StyleSheet , StatusBar, ScrollView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './src/components/CustomButton/CustomButton';
//import Box from './src/components/Box.js'

const App = () => {
  return (
<SafeAreaView style={styles.Safecontainer}>
  <View style={styles.container}>

<Text style={[styles.box]} > helllooo</Text>
<Text style={styles.text}> This is  device</Text>
<CustomButton title='Press Me' onPress={( ) => alert("press")} /> 
    {/*    <Text style={[styles.box, styles.lightgreen, styles.androidShadow]} >
        App
        <Text style={styles.asd}>ahshahjdgshjdg</Text>
      </Text>
  <Text style={[styles.box, styles.lightblue]} >App</Text> 
<Box style={{backgroundColor:"lightgray" , top:25, left:30}}> box1
</Box>
<Box > box2</Box>
<Box style={{backgroundColor:"blue" , top:75 , left:75}}> box3</Box>
<Box > box4</Box>

<Box style={{position:"absolute" , top:100 , left:100}}> box5</Box> */}

    </View>
    </SafeAreaView>
  );}

const styles=StyleSheet.create({
  container:{
  flex:1, 
alignItems:'center',  
backgroundColor:'plum',   

    paddingTop: Platform.OS === 'android' ? 25  : 0,
   
  },

  text:{
    ...Platform.select({ 
      ios:{ 
        fontSize:20,
        color:'blue',
      },
      android:{
        fontSize:25,
        color:'green',
      }

    })
  }
  ,

  box:{
    width:'25%',
    height:'25%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'white',
  },

  asd:{
    fontWeight:'bold',
    color:'purple',
    textAlign:'center',
    marginVertical:10,


  },
   
  
lightgreen:{
  backgroundColor:'lightgreen',
  fontSize:30,
  fontWeight:'bold',
  color:'#000000',
  textAlign:'center',
  marginVertical:20,
  shadowColor:"darkgreen",
  shadowOffset:{width:0, height:2},
  shadowOpacity:0.8,
  shadowRadius:2,
},
lightblue:{
  backgroundColor:'lightblue',
  fontSize:30,
  fontWeight:'bold',
  color:'#000000',
  textAlign:'center',
  marginVertical:20,
},
androidShadow:{
  elevation:10,

},
Safecontainer:{
  flex:1,
  backgroundColor:'lightgray',
}

})





export default App