import react from "react";
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, Button } from "react-native"; 
import Greet from "./src/components/Greet.js";


const App=()=> {
    return(



        <View style={styles.container}>

        {/*<Button title="Alert" onPress={() => alert('Button Pressed!')} />
           <Text>aös</Text>
           <StatusBar barStyle="light-content" backgroundColor="lightreen" hidden/>
<ActivityIndicator size="small" color="blue" hidden/>*/}
<Greet name="John Doe"/>
<Text> StyleSheet Api</Text>




           
      </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:60,
        backgroundColor:'plum',
    }
})
export default App;