import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder,secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor="#2971AB"
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};
const styles = StyleSheet.create({
container:{
    backgroundColor:'#EBF9FF',
    width:'100%',
  
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5
    

    

},
input:{
// placeholderTextColor:'#2971AB',
},
});


export default CustomInput;