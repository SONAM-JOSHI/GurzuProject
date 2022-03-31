import React from "react";
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const CustomBotton = ({onPress, text, type = "SECONDARY", bgColor, fgColor}) =>{
    return(
        <TouchableOpacity onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor}:{},
            ]}>
            <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color:fgColor} :{},
                ]}>{text}
                </Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
container:{
    backgroundColor:'#004277',
    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:10,


},
container_PRIMARY:{
backgroundColor:'black',
},

container_TERTIARY:{

},
container_SECONDARY:{
// borderColor:'#3B71F3',
// borderWidth:2,
},

text:{
    // fontWeight:'bold',
   
},
text_TERTIARY: {
    color:'gray',
},
text_SECONDARY: {
    color:'#ffffff',
    
},

});
export default CustomBotton;
