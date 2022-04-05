import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NewPasswordScreen,ResetPasswordScreen, ForgotPasswordScreen, HomeScreen, CourseScreen, CalenderScreen, NotificationScreen, SettingsScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
const {Navigator, Screen}= createStackNavigator();

const StackNav = () => {
    return(
    <NavigationContainer>
         <Navigator screenOptions={{headerShown:false}}>
             
             <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
             <Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
             <Screen name="NewPasswordScreen" component={NewPasswordScreen}/> 
               
             {/* <Screen name="HomeScreen" component={HomeScreen}/>
             <Screen name="CourseScreen" component={CourseScreen}/>
             <Screen name="CalenderScreen" component={CalenderScreen}/>
             <Screen name="NotificationScreen" component={NotificationScreen}/>
             <Screen name="SettingsScreen" component={SettingsScreen}/> */}
             
         </Navigator>
         </NavigationContainer>
     
    );
};
export default StackNav;