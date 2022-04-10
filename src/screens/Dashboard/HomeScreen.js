import React from "react";
import { View, Text, Button, Pressable, Alert,StyleSheet} from 'react-native';
import { CustomButton, SwitchButton } from "../../components";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { NavigationHeader } from "../../components";


const HomeScreen = () => {
    return (
        <View style={styles.container}>
          
{/* <NavigationHeader */}
{/* headertitle="Home"> */}
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
            {/* </NavigationHeader> */}
            <SwitchButton/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        // paddingRight:200,
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
})


export default HomeScreen;