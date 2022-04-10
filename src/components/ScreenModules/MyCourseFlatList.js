import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity,Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const MyCourseFlatList = () => {
    const scores =[
        {
            id:"1",
            name:'backend',
            score:20,
            status:'Blenders 3D',
            text:'6 Chapters',
            image:require('../../assets/blender.png')
            
        },
        {
            id:"2",
            name:'frontend',
            score:20,
            status:'Adobe Illustrator',
            text:'4 Chapters',
            image:require('../../assets/adobe.png')
          
           
        },
        {
            id:"3",
            name:'js',
            score:20,
            status:'Frontend with Angular JS',
            text:'8 Chapters',
            image:require('../../assets/angular.png')
        },
        {
            id:"4",
            name:'UI',
            score:20,
            status:'Python',
            text:'7 Chapters',
            image:require('../../assets/python.png')

        },
        {
            id:"5",
            name:'Frontend',
            score:20,
            status:'Figma',
            text:'2 Chapters',
            image:require('../../assets/figma.png')

        },
        {
            id:"6",
            name:'js',
            score:20,
            status:'Ai',
            text:'6 Chapters',
            image:require('../../assets/blender.png')

        },
      
    ]
const List = ({scores}) => {

return (
    <FlatList
      data={scores}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({item}) => {
        return (
         <TouchableOpacity>
         <View style={styles.container}>
          
           <View style={{backgroundColor:'#ffffff', height:"70%",width:'90%',borderRadius:7,}}>
               <Image style={styles.logo} source = {item.image}/>
           </View>
           <View>
            <Text style={styles.textstatus}>{item.status}</Text>
            <Text style={styles.texttext}>{item.text}</Text>
            </View>
            </View>
          
          </TouchableOpacity>
        );
      }}
    />
  );

  }

  return(
      <View style={{display:'flex', justifyContent:'space-evenly',width:"100%" ,height:"100%"}}>
          <List scores={scores}/>
      </View>
  )
};

export default MyCourseFlatList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height:223,
    marginLeft:50,
    marginRight:0,
    width:179,
    margin:5,
    justifyContent: 'center',
    // alignItems:'center',
    paddingLeft:5,
    backgroundColor:'#ffffff',
    borderRadius:7
    

  },
  logo:{
// justifyContent:"center",
// alignItems:"center",
// marginHorizontal:2,
flex:1,
height:height/5.5,
width:width/3,
borderRadius:7,

  },
  textstatus:{
    color:'black',
    fontFamily:'WorkSans-Regular'
     },
  texttext:{
  color:'grey',
  fontFamily:'WorkSans-Regular'
  },

});