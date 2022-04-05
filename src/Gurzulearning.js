import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {ForgotPasswordScreen, NewPasswordScreen} from './screens';
import {StackNav} from './routes';
import MainContainer from './screens/MainContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* // <ForgotPasswordScreen/> */}
    {/* <NewPasswordScreen/> */}
    {/* <ForgotPasswordScreen/> */}
<StackNav/>
{/* <MainContainer/> */}
    {/* <Navigation /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },

});

export default App;