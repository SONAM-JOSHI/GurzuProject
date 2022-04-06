import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CourseToggleButton from '../../components';
import {ContainerButton}  from "../../components";
import  {NavigationHeader}  from "../../components";

const CourseScreen = () => {
    return (

        // <ScrollView>
            
            <View style={styles.main}>
                <NavigationHeader
                headertitle="Courses"/>
                <View style={styles.container}>
                    <CourseToggleButton style={styles.toggle}
                        labelText="My courses"
                    />
                </View>

                <View style={styles.container}>
            {/* <View style={styles.img}> 
                    * <ContainerButton style={styles.blender}
                        labelText="Blenders 3D"
                        text="6 Chapters"

                    />
                      </View> */}
                    {/* <ContainerButton style={styles.blender1}
                      
                        labelText="Adobe Illustrator"
                        text="6 Chapters"
                      

                    />
                    <ContainerButton style={styles.blender2}
                        labelText="Frontend with Angular Js"
                        text="6 Chapters"

                    />
                    <ContainerButton style={styles.blender3}
                        labelText="Python"
                        text="6 Chapters"

                    />
                    <ContainerButton style={styles.blender4}
                        labelText="All courses"
                        text="6 Chapters"

                    />
                    <ContainerButton style={styles.blender5}
                        labelText="All courses"
                        text="6 Chapters"

                    /> */}

                </View>


            </View>
        // </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        display:'flex',
        // display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 80,
        
    },
    main: {
        display:"flex",
        flex:1,
        // justifyContent:'space-between',
        // flexDirection: 'column',
        // marginLeft: 10,
        // padding:10,
    },
    blender: {
        marginLeft: 32,
        width: 179,
        height: 223,

    },
    blender1: {
        left: 50,
        // marginLeft: 10,
        width: 179,
        height: 223,
    },
    blender2: {
        marginLeft: 32,
        width: 179,
        height: 223,
    },
    blender3: {
        left: 50,
        // top:239,
        width: 179,
        height: 223,
    },
    blender4: {
        marginLeft: 32,
        width: 179,
        height: 223,
    },
    blender5: {
        left: 50,
        // marginLeft: 10,
        width: 179,
        height: 223,
    },
    
    toggle: {
       
    },
    toggle1:{
       
        textAlign:'center',
        margin:15,
        marginBottom:50,
        
    },
})

export default CourseScreen;