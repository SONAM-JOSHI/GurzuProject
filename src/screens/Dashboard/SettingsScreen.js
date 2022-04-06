import React from "react";
import {View, Text} from 'react-native';
import { NavigationHeader } from "../../components";
import {CustomButton} from '../../components';
import { useNavigation } from "@react-navigation/native";
const SettingsScreen = () => {
  const navigation = useNavigation();
    return(
        <View>
        <NavigationHeader headertitle="Settngs"/>

<CustomButton  labelText="Logout" 
handleOnPress={()=>navigation.navigate('ForgotPasswordScreen')}/>
            {/* <Text>This is Settings Screen</Text> */}
        </View>
        
    )
};


export default SettingsScreen;