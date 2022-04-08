import React from 'react';
import {View, Text, Image,StyleSheet,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const NavigationHeader = (
    {
        headertitle=''
    }
) =>{
return(
    <View style={styles.header}>
    <View>
    {/* <Text style={styles.greetingtext}>Hi</Text> */}
    <Text style={styles.userinfo}>{headertitle}</Text>
    </View>
     
     {/* <Image style={styles.img} source={require('../../assets/F3.png')} /> */}

    </View>
)
}
export default NavigationHeader;

const styles = StyleSheet.create({
    header:{
        position:'relative',
        top:0,
        height:height-770,
        width:width,
        backgroundColor:'#004277',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        display:'flex',
        justifyContent:'center',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
      },
      greetingtext:{
        fontSize:18,
        color:'#FFFF',
        fontFamily:"WorkSans-Regular"
      },
      userinfo:{
    textAlign:'center',
        fontSize:26,
    color:'#FFFF',
    fontFamily:"WorkSans-Regular"
      },
      img:{
        height:45,
        width:45
      },
})