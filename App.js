import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Header from './src/components/Header';
import Asd from './src/components/Asd';
import User from './src/components/User';
import Users from './src/Users';
const App= ({}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <Title text= 'esranur' color='green' />
      <Title text='eylem'  color='blue'/>
      <User data={{id:1, name: 'Esra'}} />
      < Users  data={['Burak' ,'Ali', 'Emine']} />

 <Header/>

  <Asd/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default App;
