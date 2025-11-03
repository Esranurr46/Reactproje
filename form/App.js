import { StyleSheet, Text, StatusBar, TextInput ,View} from 'react-native';
import { SafeAreaView ,SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react'; 
import { Switch } from 'react-native';
export default function App() {
  const[name , setName] = useState("")
  const [type , setType] = useState("")
  const [isDarkMode , setIsDarkMode] = useState (true) 
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.Atext}> email</Text>
    <TextInput style={styles.input} 
    value={type} 
    onChangeText={setType} 
    placeholder='email@exampla.com'
    autoCorrect={false} 
    //autoCapitalize='none' 
    //secureTextEntry={true}  
    
    /> 
    <Text style={styles.text}> isim {name}</Text>
    <TextInput style={[styles.input , styles.inputIsim]} value={name} onChangeText={setName}
    keyboardType='default'  
    placeholder='düsüncelerinizi giriniz'   /> 

    <View style={styles.Switchcontainer}> 

<Text style={styles.text}>Dark Mode</Text>
<Switch value={isDarkMode} onValueChange={( ) =>
 setIsDarkMode ((previousState) => !previousState) }
trackColor={{false:'white' , true:'black'}  
}
thumbColor='blue'

 
 />
 
      </View>   
      
       </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    paddingTop: StatusBar.currentHeight,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    margin: 16,
    padding: 8, 
  },
  inputIsim:{
    minHeight:100, 
    textAlignVertical:'top',
  },  
  text:{
    padding: 10 ,  
    fontSize: 20,
    color:'blue',  

  } ,
  Atext:{
    padding: 10 ,  
    fontSize: 20,
    color:'red',
  } , 
  Switchcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
paddingHorizontal:16, 
  },  
});
