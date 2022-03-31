import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {CustomInput, CustomBotton} from '../components';


import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onSendRequestPressed = () => {
        navigation.navigate('ResetPasswordScreen')
    };
    const loggedin = () => {
        // const request =console.warn('onSendRequestPressed');
        // console.warn('Loggenin')
        
    };

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
                    <Text style={styles.text}>Enter your email and a link will be sent {"\n"}
                        to the provided email</Text>
                </View>
                <Text style={styles.mail}>Email</Text>

                <CustomInput placeholder="johnDoe@gmail.com" value={code} setValue={setCode} />
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}


                <CustomBotton
                    onPress={onSendRequestPressed}
                    text="Send Request"

                    type="SECONDARY"
                />
                <View style={styles.footer}>
                    <Text style={{ color: "#7C7C7A", fontSize: 14, marginLeft: 70, marginTop: 10 }}>Remembered your Password? </Text>
                    <TouchableOpacity onPress={loggedin}>
                        <Text style={{ color: "#004277", fontSize: 14, marginTop: 10, marginLeft: 5 }}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'flex-start',
        padding: 20,
        margin: 25,
        marginTop: 90,


    },
    text: {
        fontSize: 20,
        paddingBottom: 20,
        textAlign: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: '400',
        color: '#004277',
        margin: 20,
        fontFamily: 'Work Sans',
        fontStyle: 'normal',

    },
    placeholder: {
        color: '#2971AB',
    },
    mail: {
        // paddingHorizontal:10,
        color: '#004277',
        fontSize: 14,



    },
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,

    },
    footer: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default ForgotPasswordScreen;