import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { PURPLECOLOR } from '../constants/color';
import InputField from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import ReusableButton from '../components/SubmitBtn';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Sign in to your Account</Text>
          <Text style={styles.subHeading}>Enter your email and password to log in</Text>

          <View style={styles.form}>
            <InputField label="Email" value={email} onChangeText={setEmail} placeholder="Enter your Email" />
            <View style={styles.passwordContainer}>
              <InputField label="Password" value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry={secureText} />
              <Pressable style={styles.iconStyle} onPress={() => setSecureText(!secureText)}>
                <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="#6C7278" />
              </Pressable>
            </View>
            <Text style={styles.forgotPwd} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Text>
            <ReusableButton title="Log in" />
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
          <Pressable style={styles.socialButton}>
            <AntDesign name="google" size={20} color="#DB4437" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </Pressable>

          <Pressable style={styles.socialButton}>
            <Entypo name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </Pressable>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    color: PURPLECOLOR,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 25,
    fontWeight: '500',
  },
  subHeading: {
    color: '#6C7278',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    marginTop: 20,
  },
  passwordContainer: {
    position: 'relative',
  },
  iconStyle: {
    position: 'absolute',
    right: 15,
    top: 38,
  },
  forgotPwd: {
    color: PURPLECOLOR,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'right',
    marginVertical: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  orText: {
    marginHorizontal: 10,
    color: '#6C7278',
    fontWeight: '500',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
    justifyContent: 'center',
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#6C7278',
  },
  signUpLink: {
    fontWeight: '500',
    color: PURPLECOLOR,
  },
});
