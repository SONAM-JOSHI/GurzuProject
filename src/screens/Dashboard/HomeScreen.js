import React from "react";
import { View, Text, Button, Pressable, Alert,StyleSheet} from 'react-native';
import { CustomButton } from "../../components";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { NavigationHeader } from "../../components";

const HomeScreen = () => {
    return (
        <View>
<NavigationHeader
headertitle="Home">
            {/* <CustomBotton
                text="To-Do"
                type="PRIMARY"
            /> */}
            {/* <CustomBotton
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
            /> */}
            {/* <CustomBotton
                text="Select Course  >"
                type="Four"
            /> */}
            </NavigationHeader>
        </View>
    )
};




export default HomeScreen;