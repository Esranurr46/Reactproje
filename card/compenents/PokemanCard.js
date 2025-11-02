import { View, Text ,StyleSheet, Platform , Image , ScrollView} from 'react-native'
import React from 'react'

const getTypeDetails = (type) => {  
switch(type.toLowerCase()){ 
    
    case 'electric':
        return {
            borderColor:'#FFEA00', emoji:'⚡️'   
        };  
        case 'water':   
        return {
            borderColor:'#00BFFF', emoji:'💧'   
        };  
        case 'fire':        
        return {
            borderColor:'#FF4500', emoji:'🔥'   
        };  
        case 'grass':   
        return {
            borderColor:'#32CD32', emoji:'🍃'   
        };  
        default:    
        return {
            borderColor:'#A9A9A9', emoji:'❓'   }
        };
}







const PokemanCard = (pokeman) => {
    const { name, type, hp, image, moves, weaknesses } = pokeman;
    const{borderColor, emoji} = getTypeDetails(type);
      return (
        <ScrollView>
    <View style={styles.card}>
       < View style={styles.nameContainer}>
       <Text style={styles.name}>{name}</Text>
       <Text style={styles.hp}>ᥫ᭡ ❤︎ ❤️ {hp}</Text>  
     </View>
<Image source={image} style={styles.image} accessibilityLabel={`${name} pokeman`}  /> 
   
    <View> 
    </View> 
    <View style={styles.typeContainer}>
    <View style={[styles.badge ,{borderColor}]}>
    <Text style={styles.typeEmoji}> {emoji} </Text> 
    <Text style={styles.typeText}>{type}</Text>    
    </View> 
    </View>
    <View style={styles.movesContainer}> 
    <Text style={styles.movesText}>
        Moves: {moves.join(", ")}   

    </Text>
    </View>
    <View style={styles.weaknessesContainer}>
    <Text style={styles.textWeaknesses}> 
        Weaknesses: {weaknesses.join(", ")}     
    </Text>
    </View>
    </View>
    </ScrollView>   
  )
} 
const styles = StyleSheet.create({
    card:{
backgroundColor:'white',
borderRadius:10,     
borderWidth:2,
padding:16,
margin:16, 

... Platform.select({   
    ios:{ 
        shadowColor:'#333',     
        shadowOffset:{width:2, height:2},
        shadowOpacity:0.3,
        shadowRadius:4,  

    },
    android:{  
        elevation:5,  
    }   
}),  
},
nameContainer:{
    flexDirection:'row',
    justifyContent:'space-between', 
    marginBottom:32,  
},  
name:{
    fontSize:24,
    fontWeight:'bold',  
},
hp:{
    fontSize:18,
 },  
image:{
    width:'100%',
    height:200,
    resizeMode:'contain',  
    marginBottom:16,  
},
typeContainer:{
    alignItems:'center',
    marginBottom:40,  
},  
badge:{
    flexDirection:'row',    
    alignItems:'center',  
    borderWidth:2,
    borderRadius:20,
    paddingVertical:4,
    paddingHorizontal:8,  
},  
typeEmoji:{
    fontSize:30,
    marginRight:12,  
},  
typeText:{
    fontSize:16,
    fontWeight:'500',  
}, 
movesContainer:{
    marginBottom:16,  
},  
movesText:{
    fontSize:25,
    fontWeight:'bold',   
},  
weaknessesContainer:{  
    marginBottom:20,  
},  
textWeaknesses:{
    fontSize:18,        
    fontWeight:'bold',   
},  






});  

export default PokemanCard