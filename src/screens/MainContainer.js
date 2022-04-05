import *as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen, CourseScreen, CalendarScreen, NotificationScreen, SettingsScreen } from "../screens";

const HomeName = 'Home';
const CourseName = 'Course';
const CalendarName = 'Calendar';
const NotificationName = 'Notification';
const SettingsName = 'Settings';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (

        <NavigationContainer>

            <Tab.Navigator
                initialRouteName={HomeName}
                screenOptions={({ route }) => ({
                    headerShown:false,
                    tabBarStyle:{
                        // position:'absolute',
                        bottom:0,
                        top:0,
                        left:0,
                        right:0,
                        backgroundColor:'#004277',
                        height:80,

                    },
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === HomeName) {
                            iconName = 'home-outline';
                        } else if (rn === CourseName) {
                            iconName = 'settings-outline';
                        } else if (rn === CalendarName) {
                            iconName = 'calendar-outline';
                        } else if (rn === NotificationName) {
                            iconName = 'notifications-outline';
                        } else if (rn === SettingsName) {
                            iconName = 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },

                })}
                tabBarOptions={{
                activeTintColor: '#004277',
                inactiveTintColor: '#ffffff',

                  

                }}

            >

                <Tab.Screen name={HomeName} component={HomeScreen} />
                <Tab.Screen name={CourseName} component={CourseScreen} />
                <Tab.Screen name={CalendarName} component={CalendarScreen} />
                <Tab.Screen name={NotificationName} component={NotificationScreen} />
                <Tab.Screen name={SettingsName} component={SettingsScreen} />



            </Tab.Navigator>

        </NavigationContainer>

    );
};

export default MainContainer;