
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import CustomButton from '../../components/ButtonComponent/CustomButton';
import { CustomInput } from '../../components';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { PasswordInput } from '../../components';   

const { width, height } = Dimensions.get('window')
const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newcode, setnewCode] = useState('')
    const navigation = useNavigation();

    const onResendPressed = () => {
        navigation.navigate('BottomTab')
    }
    
    return (
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.root}>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/F3.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Create New Password</Text>
                    <PasswordInput placeholderText=' Enter your new password' labelText=' Password' secureTextEntry={true} 
            
                    
                    
                    />

                    <PasswordInput placeholderText='Re-Enter your password' labelText='Confirm Password' secureTextEntry={true} />
                    <CustomButton
                        labelText="Change Password"
                        onPress={onResendPressed}
                        type="SECONDARY"
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
      
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width
    },
    text: {
        fontSize: 14,
        paddingBottom: 20,
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
    },

    title: {
        fontSize: 27,
        textAlign: 'center',
        fontWeight: '400',
        color: '#004277',
        fontFamily: 'WorkSans-Regular',
        letterSpacing: 2,
        width: width
    },

    placeholder: {
        fontFamily: 'WorkSans-Regular',
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        width: width - 10,
        top: height / 500
    },

    footer: {
        display: 'flex',
        flexDirection: 'row'
    },
    
    password: {
        color: '#004277',
        height: 25,
        fontSize: 14,
        width: 200,
    },
});

export default NewPasswordScreen;