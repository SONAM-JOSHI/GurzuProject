import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NewPasswordScreen,ResetPasswordScreen, ForgotPasswordScreen } from '../screens';
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
const {Navigator, Screen}= createStackNavigator();

const StackNav = () => {
    return(
    <NavigationContainer>
         <Navigator screenOptions={{headerShown:false}} initialRouteName='ForgotPasswordScreen'>
             
             <Screen name = "BottomTab" component={BottomTab}/>
             <Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
             <Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
             <Screen name="NewPasswordScreen" component={NewPasswordScreen}/> 
               
         </Navigator>
         </NavigationContainer>
     
    );
};
export default StackNav;