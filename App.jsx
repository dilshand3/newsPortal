import { StyleSheet, View } from 'react-native';
import Login from './src/LoginScreen/Login';
import ForgotPassword from './src/LoginScreen/ForgotPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import VerificationCode from './src/LoginScreen/VerificationCode';
import ResetPasswd from './src/LoginScreen/ResetPasswd';
import PasswordSucces from './src/LoginScreen/PasswordSucces';

const Tab = createBottomTabNavigator();

const LoginNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle : {display : "none"}}}>
      <Tab.Screen name="Login" component={Login}/>
      <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
      <Tab.Screen name='verificationcode' component={VerificationCode} />
      <Tab.Screen name='resetPassword' component={ResetPasswd}/>
      <Tab.Screen name='passwordSucces' component={PasswordSucces}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <LoginNavigator/>
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
