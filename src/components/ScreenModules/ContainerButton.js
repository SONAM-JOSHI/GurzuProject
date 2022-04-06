import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';



const ContainerButton = ({
    labelText = '',
    handleOnPress = null,
    style,
    text = '',
    type,
    isPrimary = true,
    image = ' ',
  ...more
}) => {
    return (
        <TouchableOpacity
            style={{
                marginVertical: 5,
                // position:'relative',
                top: 0,
                paddingVertical: 10,
                backgroundColor: '#ffffff',
                borderRadius: 7,
                width: 190,
                // alignItems:'center',
                justifyContent:'space-around',
                display: 'flex',
                flexWrap: 'wrap-reverse',
                flexDirection: 'row',
                height: 223,
                left: 0,
                // shadowColor:'0px 1px 3px rgba(0, 0, 0, 0.25)',


                justifyContent: 'center',
                ...style,
            }
            }{...more}>
            
            
            <Text style={{ 
                textAlign:'left',
                alignItems:'flex-start',
                fontSize: 12, 
                color: 'black', 
                fontFamily: 'WorkSans-Regular',
                 fontWeight: '400',
                 marginTop:20,
                 }}>
                {labelText}
            </Text>
          
            <Text style={{
                fontSize: 10, 
                color: '#616161',
                 fontFamily: 'WorkSans-Regular', 
                 fontWeight: '400',
                marginRight:40,
                paddingTop:20,
             
                 }}>
                {text}
            </Text>
            <Image source={require('../../assets/F3.png')} style={{marginTop:20}}/>
        </TouchableOpacity>
    );
};

export default ContainerButton;