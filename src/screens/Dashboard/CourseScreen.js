import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ToggleButton} from '../../components';
import {
  HomeScreenHeader,
  AllCourseContainer,
  MyCourseContainer,
} from '../../components';
import {AllCourse} from '../../redux/actions/CourseActions';
import {useDispatch, useSelector} from 'react-redux';

const CourseScreen = () => {
  const courseToken = useSelector(state => state.authReducer.authToken);

  const [myCourse, setMyCourse] = useState(false);
  const [allCourse, setAllCourse] = useState(true);

  const dispatch = useDispatch();
  const handleTodoPress = () => {
    setMyCourse(!myCourse);
    setAllCourse(false);
  };
  const recentPress = () => {
    setAllCourse(!allCourse);
    setMyCourse(false);
    dispatch(AllCourse(courseToken));
    console.warn('this');
  };

  const handleGestuer = () => {
    if (myCourse) {
      return <MyCourseContainer />;
    }
    if (allCourse) {
      return <AllCourseContainer />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeScreenHeader />
      </View>

      <View style={styles.buttoncontainer}>
        <ToggleButton
          labelText="My courses"
          iconname="pencil"
          textColor={!myCourse}
          style={!myCourse ? styles.togglebutton : styles.togglebutton1}
          onPress={() => handleTodoPress()}
        />

        <ToggleButton
          textColor={!allCourse}
          iconname="note"
          labelText="All courses"
          style={!allCourse ? styles.togglebutton : styles.togglebutton1}
          onPress={() => recentPress()}
        />
      </View>

      <View style={styles.content}>{handleGestuer()}</View>
    </View>
  );
};
export default CourseScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  buttoncontainer: {
    backgroundColor: 'white',
    position: 'relative',
    top: '5%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // height: "10%",
    // backgroundColor:'black'
  },

  togglebutton: {
    elevation: 10,
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: 'white',
  },
  togglebutton1: {
    elevation: 10,
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#004277',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
