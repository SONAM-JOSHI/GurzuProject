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
                    <Text style={styles.text}>Please enter the code sent in your  {"\n"} 
                    Email.</Text>
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
        margin: 35,
        marginTop: 90,
        

    },
    text: {
        fontSize: 14,
        paddingBottom: 40,
        textAlign:'center',
        fontFamily:'WorkSans-Regular',

    },

    title: {
        fontSize: 32,
        fontWeight: '400',
        color: '#004277',
        margin: 15,
        fontFamily:'WorkSans-Regular',

        
    },
    placeholder: {
        color: '#2971AB',
    },
    code: {
        color: '#004277',
        fontSize: 14,
        fontFamily:'WorkSans-Regular',
        height:25,

    },
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 55,
        marginHorizontal:20,


    },

});

export default ResetPasswordScreen;