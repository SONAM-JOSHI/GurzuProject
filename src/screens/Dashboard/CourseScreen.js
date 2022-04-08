import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { CourseToggleButton } from '../../components';
import { ContainerButton, CourseFlatList } from "../../components";
import { NavigationHeader } from "../../components";

const CourseScreen = () => {
    const [state, setState] = useState(false);
    return (

        <View style={styles.main}>
            <NavigationHeader
                headertitle="Courses" />

            <View style={styles.container}>
                {!state ? (<CourseToggleButton style={styles.toggle}
                    labelText="My courses"
                    handleOnPress={() => setState(!state)}
                />) :
                    (<CourseToggleButton style={styles.toggle1}
                        labelText="My courses"
                        handleOnPress={() => setState(!state)}

                    />)}

                {!state ? (<CourseToggleButton style={styles.toggle}
                    labelText="All courses"
                    handleOnPress={() => setState(!state)}

                />) :
                    (<CourseToggleButton style={styles.toggle1}
                        labelText=" All courses"
                        handleOnPress={() => setState(!state)}

                    />)
                }


            </View>

            <ScrollView>
                <View style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", paddingTop: 20 }}>

                    <CourseFlatList />

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


    },
    main: {
        display: "flex",
        flex: 1,
    },

    toggle: {
        marginLeft: 25,
        backgroundColor: '#004227'

    },
    toggle1: {
        backgroundColor: '#FFFFFF'
    },

})

export default CourseScreen;