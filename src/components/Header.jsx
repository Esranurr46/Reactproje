import { React } from "react";
import { StyleSheet, Text, View } from "react-native";


const Header = () => {
    return (
        <View >
        <Text style={styles.sekil} >My Application Header</Text>
        </View>
    );
}
const styles=StyleSheet.cerate=({
    sekil:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4A90E2',
        textAlign:'center',
        marginVertical:20,
    }
})

    


    export default Header;