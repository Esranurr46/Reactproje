import react from "react";  
import { Pressable ,Text } from "react-native";
const CustomButton=({onPress, title})=>{
    return(
        <Pressable 
        onPress={onPress} 
        style = {{

    
                padding:20,
                borderRadius:20,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'blue',        
        
        }}> 
            <Text style={{color:'purple', fontSize:16}}>{title}</Text>
        </Pressable>
    );
} 
export default CustomButton;  

