import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import {CustomInput, CustomBotton} from '../components';



const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newcode, setnewCode] = useState('')

    const onResendPressed = () =>{
        console.warn("button pressed")
      
    }
    // const show = () =>{
    //     if(code === newcode) {
    //         return(
    //             <View><Text>pass correct</Text></View>
    //         )
    //     }
    //     else{
    //         return(
    //             <View><Text>pass wrong</Text></View>
    //         )
    //     }
    // }
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
                    <Text style={styles.title}>Create New Password</Text>
                </View>
                <Text style={styles.password}>Password</Text>

                <CustomInput placeholder="Enter new password" value={newcode} setValue={setnewCode} />
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}


                <Text style={styles.password}>Confirm Password</Text>

                <CustomInput placeholder="Re-enter your password" value={code} setValue={setCode} />
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}

                <CustomBotton
                    text="Change Password"
                    onPress={onResendPressed}
                    type="SECONDARY"
                    secureTextEntry
                />
          {/* {show()} */}
            </View>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>
        // {/* </NavigationContainer> */}
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'flex-start',
        padding: 20,
        margin: 10,
        marginTop: 90,


    },
    text: {
        fontSize: 20,
        paddingBottom: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: '400',
        color: '#004277',
        margin: 30,
        fontFamily: 'Work Sans',


    },
    placeholder: {
        color: '#2971AB',
    },
    password: {
        color: '#004277',
        fontSize: 14,



    },
    container: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,

    },

});

export default NewPasswordScreen;