import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from 'react-native';
import {loginUser, userToken} from '../../redux/actions';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {CheckBox, Icon} from '@rneui/themed';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {FormInput, PasswordInput} from '../../components/';
import {CustomButton} from '../../components/';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setPassword] = useState('');
  const [check2, setCheck2] = useState(false);
  const [isvisible, setVisibility] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const LoginToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const LoginToHome = () => {
    // navigation.navigate('bottom');
    // return;
    var logindata = JSON.stringify({
      user: {
        email: loginEmail,
        password: loginPassword,
      },
    });

    dispatch(loginUser(logindata));
    dispatch(userToken(logindata));
  };

  const LoginToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.innercontainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/gurzuIcon.png')}
        />

        <Text style={styles.header}>Welcome back!</Text>
        <Text style={styles.secondheader}>Login to your account</Text>
        {/* form input view start */}
        <View style={styles.inputcontainer}>
          <FormInput
            labelText="Email"
            placeholderText="Enter your email"
            value={loginEmail}
            onChangeText={email => setLoginEmail(email)}
          />
          <PasswordInput
            labelText="Password"
            placeholderText="Enter your password"
            value={loginPassword}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
          />
        </View>
        {/* form input view end */}

        {/* container view for remember me and forgotpassword button */}
        <View style={styles.checkboxcontainer}>
          <CheckBox
            center
            title={<Text style={styles.checkboxtitle}>Remember me</Text>}
            uncheckedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                borderColor="#004277"
                color="#004277"
                size={15}
              />
            }
            checkedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="#004277"
                size={15}
              />
            }
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />

          <TouchableOpacity onPress={LoginToForgotPassword}>
            <Text style={styles.textcolor}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* checkbox container end */}

        {/* button for email login and google signin */}
        <CustomButton labelText="Login" handleOnPress={LoginToHome} />

        {/* buttons end */}

        {/* footer info start */}
        <View style={styles.infocontainer}>
          <Text style={styles.questiontext}>Don't have an account?</Text>
          <TouchableOpacity onPress={LoginToRegister}>
            <Text style={styles.questionbutton}>join today</Text>
          </TouchableOpacity>
        </View>
        {/* footer info end */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innercontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '5%',
    height: height - 60,
    width: width,
  },

  logo: {
    position: 'relative',
    marginLeft: 10,
    height: 97,
    width: 97,
  },
  header: {
    fontFamily: 'WorkSans-Regular',
    position: 'relative',
    width: 238,
    height: 45,
    top: 10,
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    // eslint-disable-next-line no-dupe-keys
    fontWeight: '400',
  },
  secondheader: {
    fontFamily: 'WorkSans-Regular',
    width: 180,
    height: 22,
    fontWeight: '400',
    fontSize: 16,
    marginTop: 10,
    color: '#7C7C7A',
  },

  inputcontainer: {
    marginTop: 30,
  },

  checkboxcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 25,
    width: width,
    // backgroundColor:'#000000',
  },
  checkboxtitle: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    marginLeft: 8,
  },
  signin: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    position: 'relative',
    top: 22,
    paddingVertical: 10,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#004277',
    width: width - 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  signintext: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '500',
    color: '#004277',
    marginRight: 50,
  },
  questiontext: {
    marginTop: 30,
    color: '#616161',
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    padding: 5,
  },
  questionbutton: {
    marginLeft: 10,
    marginTop: 35,
    color: '#004277',
    fontSize: 13,
    fontFamily: 'WorkSans-Regular',
  },

  textcolor: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    fontSize: 13,
  },
  infocontainer: {
    flexDirection: 'row',
  },
});
