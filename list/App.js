import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView , FlatList} from 'react-native';
import { SafeAreaView ,SafeAreaProvider} from 'react-native-safe-area-context';
import pokemenList from './data.json'; 
import groupPokemanList from './group-data.json';  
import { SectionList } from 'react-native';
export default function App() {
  return (
    <SafeAreaProvider>

    <SafeAreaView style={styles.container}> 
  
  {/*  <ScrollView style={styles.scrollView}>
   {
     pokemenList.map(pokeman => {
      return(
        <View style={styles.card} key={pokeman.id}>
<Text style={styles.cardText}>{pokeman.type}</Text>
<Text>{pokeman.name}  </Text> 
        </View>
      )})}
    </ScrollView>*/}
<View style={styles.scrollView}>
  {/*
<FlatList 
data={pokemenList}
renderItem={({item}) => {
  console.log(item.id);
  return(
    <View style={styles.card} key={item.id}>
<Text style={styles.cardText}>{item.type}</Text>  
<Text >{item.name}  </Text> 

        </View>

  
);
}}
keyExtractor={(item,index) => item.id.toString() }
ItemSeparatorComponent={() => <View style={{height: 16}} />}
ListEmptyComponent={() => <Text style={styles.EmptyText}>No pokeman</Text>}
ListHeaderComponent={() => <Text style={styles.HeaderText}>Pokeman List</Text>}
ListFooterComponent={() => <Text style={styles.FooterText}>End of List</Text>}
/>  */}
<SectionList
  sections={groupPokemanList}
  renderItem={({item}) => {
    return(
      <View style={styles.card}>
        <Text style={styles.cardText}>{item}</Text>  
      </View>)
  }}
  SectionSeparatorComponent={() => <View style={{height: 16}} />}

  renderSectionHeader={({section}) => {
    return(
      <Text style={styles.sectionHeaderText}>{section.type}</Text>
    )
  } }  
/> 

</View> 
    </SafeAreaView>
       </SafeAreaProvider>

  );
     }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
card:{
  backgroundColor: 'white', 
  borderRadius: 8,
  padding: 16,
   marginVertical: 8,
  marginHorizontal: 16,
  shadowColor: 'red',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
  scrollView: {
    marginHorizontal: 10,
  },
  cardText:{
    fontSize: 18,
    fontWeight: 'bold',
  } ,
  EmptyText:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold', 
    color: 'gray',
    backgroundColor:'plum',
  

  } ,
  HeaderText:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold', 
    color: 'black',
    backgroundColor:'lightblue',
  },
  FooterText:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold', 
    color: 'black',
    backgroundColor:'lightgreen',
  } ,
  sectionHeaderText:{
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 8,
    marginTop: 16,  
  },



});
