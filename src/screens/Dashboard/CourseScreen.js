import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { CourseToggleButton } from '../../components';
import { ContainerButton, MyCourseFlatList, AllCourseFlatlist, InsideAllCourse } from "../../components";
import { NavigationHeader } from "../../components";



const CourseScreen = () => {
    const [coursestate, setState] = useState(false);
    const [allstate, setallState] = useState(true);
    const handleCourse = () => {
        if (coursestate) {
            return <MyCourseFlatList />;
        }
        else if (allstate) {
            return <AllCourseFlatlist />
        }
    
    }
    return (

        <View style={styles.main}>
            <NavigationHeader
                headertitle="Courses" />

            <View style={styles.container}>


                {coursestate ? (<CourseToggleButton style={styles.toggle1}

                    labelText="My courses"
                    onPress={() => setallState(coursestate)}
                    iconname="book-open-page-variant"

                />) :
                    (<CourseToggleButton style={styles.toggle1}
                        labelText="My courses"
                        onPress={() => setState(!coursestate)}

                    />)}


                {!allstate ? (<CourseToggleButton style={styles.toggle1}
                    iconname="book-open-page-variant"
                    labelText="All courses"
                    onPress={() => setallState(!allstate)}



                />) :
                    (<CourseToggleButton style={styles.toggle1}
                        labelText=" All courses"
                        onPress={() => setState(!allstate)}
                        iconname="bookshelf"

                    />)
                }


            </View>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", paddingTop: 20 }}>
                    {handleCourse()}
                    {/* <MyCourseFlatList />
                    <AllCourseFlatlist/> */}
                </View>
            </ScrollView>

        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginRight: 80,
        paddingBottom: 20,
        paddingTop: 20,

    },
    main: {
        display: "flex",
        flex: 1,
    },


    toggle1: {
        backgroundColor: '#004277'
    },
    textstatus: {
        color: 'black'
    },
    texttext: {
        color: 'grey'
    },


})

export default CourseScreen;