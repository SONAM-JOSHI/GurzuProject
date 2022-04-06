import React from "react";
import {View, Text} from 'react-native';
import { NavigationHeader } from "../../components";

const NotificationScreen = () => {
    return(
        <NavigationHeader headertitle="Notification">
        <View>
            <Text>This is Notification Screen</Text>
        </View>
        </NavigationHeader>
    )
};

 
export default NotificationScreen;