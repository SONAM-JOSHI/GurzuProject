
import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SwitchButton } from "../../components";


const { height, width } = Dimensions.get('window');
const AllCourseFlatlist = () => {
  const taskdetail = [
    {
      id: '1',
      name: 'UI/UX design',
      text: '-10 chapters'

    },
    {
      id: '2',
      name: 'Frontend',
      text: '-15 chapters'

    },
    {
      id: '3',
      name: 'Backend',
      text: '-12 chapters'

    },
    {
      id: '4',
      name: 'Nodejs',
      text: '-16 chapters'

    },
    {
      id: '5',
      name: 'Reactjs',
      text: '-8 chapters'

    }, {
      id: '6',
      name: 'UI/UX design',
      text: '-13 chapters'

    },
    {
      id: '7',
      name: 'Frontend',
      text: '-11 chapters'
    },
    {
      id: '8',
      name: 'Backend',
      text: '-10 chapters'

    },
    {
      id: '9',
      name: 'Nodejs',
      text: '-13 chapters'
    },
    {
      id: '10',
      name: 'Reactjs',
      text: '-9 chapters'
    },



  ];
  <View style={styles.courses}>
  <Text>Select Courses</Text>
      </View>
  const pressHandler = (item) => {
    console.log(item);
  }

  // const renderItem = ({ item }) => {
    

  return (
    
      <FlatList style={{}}
        data={taskdetail}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.switchbutton}>
              <SwitchButton />
            </View>
          
            <TouchableOpacity onPress={() => pressHandler(item.item)}>
              <Text style={styles.textcourse}>{item.name}</Text>
              <Text style={styles.texttext}>{item.text}</Text>
            </TouchableOpacity>
             </View>
      )

    }
/>

  );
};


const styles = StyleSheet.create({


  container: {
    height: height / 10,
    margin: 6,
    borderRadius: 15,
    width: width - 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  courses: {
   backgroundColor:'red'
  },
  textcourse: {
    fontSize: 14,
    marginTop: -15,
    color: '#000000',
    fontWeight: '500',
    fontFamily:'WorkSans-Regular',
    paddingHorizontal: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 20,
    width: '50%'


  },
  texttext: {
    fontSize: 12,
    marginBottom: 20,
    color: 'grey',
    width: '10%',
    fontWeight: '500',
    fontFamily:'WorkSans-Regular',
    marginLeft: 20,
    width: '50%',
    padding: 10,
 
  },
  switchbutton: {
    // backgroundColor:'red',
    width: '25%',
    // height:'10',
    justifyContent: 'flex-end',
    margin: 12,
    // paddingHorizontal:300,
    alignItems: 'center',
    marginLeft: 360,
    marginBottom: -15

  },

});
export default AllCourseFlatlist;