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

                <CustomInput placeholder="Enter new password" value={newcode} setValue={setnewCode} secureTextEntry/>
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}


                <Text style={styles.password}>Confirm Password</Text>

                <CustomInput placeholder="Re-Enter your password" value={code} setValue={setCode} secureTextEntry />
                {/* <CustomBotton text="Confirm" onpress={onConfirmPressed}/> */}

                <CustomBotton
                    text="Change Password"
                    onPress={onResendPressed}
                    type="SECONDARY"
                
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
        margin: 15,
        marginTop: 90,
        

    },
    text: {
        fontSize: 14,
        paddingBottom: 20,
        textAlign: 'center',
        fontFamily:'WorkSans-Regular',  
        

    },

    title: {
        fontSize: 32,
        fontWeight: '400',
        color: '#004277',
        margin: 20,
        fontFamily:'WorkSans-Regular',
        width:380,
        letterSpacing:2,
    },
    placeholder: {
        // color: '#2971AB',
        fontFamily:'WorkSans-Regular',

        
    },
    // mail: {
    //     color: '#004277',
    //     fontSize: 14,
    //     fontFamily:'WorkSans-Regular',

    // },
    container: {
        alignItems: 'center',
        padding: 2,
        marginTop: 50,
        marginHorizontal:5,

    },
    footer: {
        display: 'flex',
        flexDirection: 'row'
    },
    password:{
    color:'#004277',
    height:25,
    fontSize:14,
        width:200,
    },
});

export default NewPasswordScreen;