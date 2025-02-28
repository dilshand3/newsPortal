import { StyleSheet, View } from 'react-native';
import Login from './src/LoginScreen/Login';
import ForgotPassword from './src/LoginScreen/ForgotPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import VerificationCode from './src/LoginScreen/VerificationCode';
import ResetPasswd from './src/LoginScreen/ResetPasswd';
import PasswordSucces from './src/LoginScreen/PasswordSucces';
import signup from './src/SignupScreen/signup';
import Verification from './src/SignupScreen/Verification';
import PhoneVerification from './src/SignupScreen/PhoneVerification';
import EmailVerification from './src/SignupScreen/EmailVerification';
import AccountVerified from './src/SignupScreen/AccountVerified';

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
      <Tab.Screen name='verificationcode' component={VerificationCode} />
      <Tab.Screen name='resetPassword' component={ResetPasswd} />
      <Tab.Screen name='passwordSucces' component={PasswordSucces} />
      <Tab.Screen name='signup' component={signup} />
      <Tab.Screen name='OtpVerification' component={Verification}/>
      <Tab.Screen name='PhoneVerification' component={PhoneVerification}/>
      <Tab.Screen name='EmailVerification' component={EmailVerification}/>
      <Tab.Screen name='AccountVerified' component={AccountVerified}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
