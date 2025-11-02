import { StyleSheet , Platform } from 'react-native';
import PokemanCard from './compenents/PokemanCard'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default function App() {
const pikachuData ={
  name: "Esoman",  
  type: "Electric", 
  hp: 20,  
  image: require("./assets/pokeman.jpg"),
  moves: ["Thunder Shock", "Quick Attack", "Electro Ball"], 
  weaknesses: ["Ground"], 
}
const scoobdata ={
  name: "scoob",  
  type: "water", 
  hp: 20,  
  image: require("./assets/pokeman2.jpg"),
  moves: [ "Attack", "Electro Ball"], 
  weaknesses: ["Ground"], 
}
const pokemandata ={
  name: "pokeman",    
  type: "fire", 
  hp: 20,  
  image: require("./assets/pokeman1.jpg"),
  moves: ["Thunder Shock", "Quick Attack", "Electro Ball"], 
  weaknesses: ["Ground"], 
}
const pokemadata ={
  name: "reactman",  
  type: "", 
  hp: 20,  
  image: require("./assets/pokeman4.png"),
  moves: ["Thunder Shock", "Quick Attack", "Electro Ball"], 
  weaknesses: ["Ground"], 
}





  return (
    <ScrollView>
    <SafeAreaView
    
  style={styles.container}>
      <PokemanCard {...pikachuData }/>
      <PokemanCard {...pokemandata }/>
      <PokemanCard {...scoobdata }/>
      <PokemanCard {...pokemadata}/>

 
    </SafeAreaView>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  
  },
});
