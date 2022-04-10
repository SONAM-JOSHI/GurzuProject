import *as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/dist/Feather';


import { CourseScreen,  NotificationScreen, SettingsScreen } from '../screens/Dashboard';

// const HomeName = 'Home';
const CourseName = 'Course';
// const CalendarName = 'Calendar';
const NotificationName = 'Notification';
const SettingsName = 'Settings';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
            <Tab.Navigator
                initialRouteName={CourseName}
                screenOptions={({ route }) => ({
                    headerShown:false,
                    tabBarActiveBackgroundColor:'#ffffff',
                    tabBarItemStyle:{
                        borderRadius:10,
                        margin:8,
                        height:60,
                    },

                    tabBarStyle:{
                            backgroundColor:'#004277',
                            height:75,
                    },

                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        // let rn = route.name;
                        // if (rn === HomeName) {
                        //     iconName = 'home';
                        let rn = route.name;
                         if (rn === CourseName) {
                            iconName = 'book';
                        // } else if (rn === CalendarName) {
                        //     iconName = 'calendar';
                        } else if (rn === NotificationName) {
                            iconName = 'bell';
                        } else if (rn === SettingsName) {
                            iconName = 'settings';
                        }
                        return <Icon name={iconName} size={size} color={color} />
                    },

                })}>

                {/* <Tab.Screen name={HomeName} component={HomeScreen} /> */}
                <Tab.Screen name={CourseName} component={CourseScreen} />
                {/* <Tab.Screen name={CalendarName} component={CalendarScreen} /> */}
                <Tab.Screen name={NotificationName} component={NotificationScreen} />
                <Tab.Screen name={SettingsName} component={SettingsScreen} />
            </Tab.Navigator>
    );
};

export default BottomTab;