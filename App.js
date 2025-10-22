
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View , Button, TouchableOpacity, TouchableHighlight , TouchableWithoutFeedback} from 'react-native'; 
import Title from './src/components/title'; 
import Header from './src/components/Header';
 import Asd from './src/components/Asd';
 import User from './src/components/User';
  import Users from './src/components/Users'; 
  const App= ({}) => { 
    const fonk=() => {
      alert('hay')
    }
    return (
       <View style={styles.container}> 
       {/* <Title  text= 'esra' color={'green'} bool={true}/> 
    {/* <User data={{id:1, name:'esra'}} />
     < Users data={['esra', 'esra']} />
     <Header/> <Asd/>
       <StatusBar style="auto" /> 
        */}


<Button title="Press me" onPress={(fonk)} />  
<TouchableOpacity onPress={(fonk)}>
<Text>Press you</Text>
</TouchableOpacity>
<TouchableHighlight
  activeOpacity={0.3}
  underlayColor="red"
  onPress={() => alert('Pressed!')}>
<Text>ABC</Text>

</TouchableHighlight>
<TouchableWithoutFeedback onPress={() => alert('hopp!')}>
<Text>ABCdf</Text>
</TouchableWithoutFeedback>

       </View> ); }
        const styles = StyleSheet.create({ 
 container: 
 { flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',   },
  });

 export default App;