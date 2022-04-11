import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import MyCourseFlatList from '../ScreenModules/MyCourseFlatlist';
const {width} = Dimensions.get('window');
const MyCourseContainer = () => {
  return (
    <View style={styles.mycoursecontainer}>
      <MyCourseFlatList />
    </View>
  );
};

export default MyCourseContainer;

const styles = StyleSheet.create({
  mycoursecontainer: {
    backgroundColor: 'white',
    width: width,
    alignItems: 'center',
    // backgroundColor: 'black',
    display: 'flex',
    flex: 1,
  },
});
