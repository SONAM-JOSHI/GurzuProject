import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import {CustomInput, CustomBotton} from '../components';
import { useNavigation } from "@react-navigation/native";



const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');

const navigation = useNavigation();

const onResetPressed = () =>{
    navigation.navigate('NewPasswordScreen')
}


    return (
        <KeyboardAvoidingView behavior='position'>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.root}>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/F3.png')}
                        style={styles.logo}
                        resizeMode="contain"

                    />
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.text}>Please enter the code sent in your Email.</Text>
                </View>
                <Text style={styles.code}>Code</Text>

                <CustomInput placeholder="Please enter the code" value={code} setValue={setCode} />
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}


                <CustomBotton
                    text="Reset"
                    onPress={onResetPressed}
                    type="SECONDARY"
                />



            </View>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'flex-start',
        padding: 20,
        margin: 20,
        marginTop: 90,


    },
    text: {
        fontSize: 20,
        paddingBottom: 40,
    },

    title: {
        fontSize: 30,
        fontWeight: '400',
        color: '#004277',
        margin: 15,
        fontFamily: 'Work Sans',
        fontStyle: 'normal',

    },
    placeholder: {
        color: '#2971AB',
    },
    code: {
        color: '#004277',
        fontSize: 14,



    },
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,

    },

});

export default ResetPasswordScreen;