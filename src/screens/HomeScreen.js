import React from "react";
import { View, Text, Button, Pressable, Alert,StyleSheet} from 'react-native';
import { CustomBotton } from "../components";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const HomeScreen = () => {
    return (
        <View>

            <CustomBotton
                text="To-Do"
                type="PRIMARY"
            />
            <CustomBotton
                text="Recent Lessons"
                type="PRIMARY"
            />

            <CustomBotton
                text="My Grdaes"
                type="PRIMARY"
            />
            <CustomBotton
                text="My Assignments"
                type="PRIMARY"
            />
            <CustomBotton
                text="Select Course  >"
                type="Four"
            />
        </View>
    )
};




export default HomeScreen;