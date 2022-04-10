
import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import SwitchButton from './SwitchButton';


const { height, width } = Dimensions.get('window');
const InsideAllCourse = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UI/UX design</Text>
      <View style={styles.enroll}>
        <Text style={styles.text1}>Enroll:</Text>
      </View>
      <View style={styles.switchbutton}>
        <SwitchButton />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.paragraph}>What you'll be learning</Text>
          <View>
            <Text style={styles.subpara}>For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance  from the atmosphere and the athlete's performance will generally be better at high altitude.</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.intro}>
        <Text style={styles.introduction}>Introduction</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 1,
    marginBottom: 10,
    marginTop:-25
  },

  text: {
    color: '#004277',
    fontSize: 16,
    marginLeft: 30,
    fontFamily: 'WorkSans-Regular',
  },
  text1: {
    color: '#323232',
    fontSize: 16,
    marginLeft: 30,
    fontFamily: 'WorkSans-Regular',
    marginLeft: 325,
    paddingBottom: 25,
  },
  switchbutton: {
    width: '30%',
    marginTop: -59,
    alignItems: 'center',
    marginLeft: 330,
    display: 'flex',
    padding: 50,
    paddingEnd: 30,
    height: 5,
    paddingTop: 10,
    flexDirection: 'column-reverse',
    flex: 1
  },
  enroll: {
    marginTop: -25
  },
  body: {
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 15,
    paddingStart: -4,
    marginHorizontal: 10,
    width: '90%',
    borderRadius: 7
  },
  paragraph: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    left: 19,
  },
  subpara: {
    color: '#000000',
    marginLeft: 20,
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    letterSpacing: 2,
    paddingTop: 15,
    paddingRight: 20,
    width: '100%'
  },
  intro: {
    height: 68,
    marginLeft: 9,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    margin: 15,
    marginHorizontal: 20,
  },
  introduction: {
    color: '#323232',
    fontFamily: 'WorkSans-Regular',
    fontSize: 16
  },
});

export default InsideAllCourse; 