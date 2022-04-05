import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const ToggleButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical:5,
        position:'relative',
        top:147,
        // paddingVertical: 10,
        backgroundColor: '#004277',
        borderRadius: 25,
        width: 175,
        height:65,
        left:26,
        // display: 'flex',
        
      
        justifyContent:'center',
        ...style,
      }
      }{...more}>
      <Text style={{textAlign: 'center', fontSize: 14,color:'#FFFF',fontFamily:'WorkSans-Regular',fontWeight:'400'}}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;