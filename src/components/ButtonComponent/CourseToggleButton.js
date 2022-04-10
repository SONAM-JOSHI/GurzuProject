// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';


// const CourseToggleButton = ({
//   labelText = '',
//   handleOnPress = null,
//   style,
//   isPrimary = null,
//   iconname='',
 
//   ...more
// }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         marginVertical: 5,
//         position: 'relative',
//         top: 147,
//         backgroundColor: '#004277',
//         borderRadius: 25,
//         width: 175,
//         height: 65,
//         left: 26,
//         display: 'flex',
//         justifyContent: 'center',
//         ...style,
//       }
//       }{...more}>
//       <Text style={{ textAlign: 'center', fontSize: 14, color: '#ffffff', fontFamily: 'WorkSans-Regular', fontWeight: '400' }}>
//         {labelText}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default CourseToggleButton;
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CourseToggleButton = (
  {
    labelText = '',
    iconname = '',
    handleOnPress = null,
    style,
    textColor = null,
    ...more
  },
  {todo},
) => {
  // const color = true

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginVertical: 10,
        position: 'relative',
        top: 22,
        paddingHorizontal: 5,
        backgroundColor: '#004277',
        borderRadius: 25,
        width: 160,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft:50,
        ...style,
      }}
      {...more}>
      <View style={textColor ? styles.activebutton : styles.inactive}>
        <Icon
          color={!textColor ? '#004277' : '#FFFFFF'}
          name={iconname}
          size={20}
        />
      </View>
      <Text style={textColor ? styles.activetextcolor : styles.inactivetext}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default CourseToggleButton;

const styles = StyleSheet.create({
  activetextcolor: {
    textAlign: 'center',
    fontSize: 14,
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    marginLeft: 10,
  },
  inactivetext: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    marginLeft: 10,
  },
  inactive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  activebutton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#004277',
    borderRadius: 30,
  },
});