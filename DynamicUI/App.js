import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.box} >
      <Text style={styles.text}>Welce</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
console.log(windowWidth , windowHeight);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box:{
    width: windowWidth > 400 ? "70%" :"90%" , 
    height:windowWidth > 600 ? "90%" :"40%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',

 
  },
  text:{
    color: 'white',
    fontSize: windowWidth > 400 ? 50 :24,
    fontWeight: 'bold',
  }
});
