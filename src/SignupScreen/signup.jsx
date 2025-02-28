import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { PURPLECOLOR } from '../constants/color';
import InputField from '../components/Input';
import ReusableButton from '../components/SubmitBtn';
import Feather from "react-native-vector-icons/Feather";

const Signup = ({ navigation }) => {
  const indiaIcon = require("assets/india.png");
  const googleImg = require("assets/google.png");
  const faceBookImg = require("assets/facebook.png")
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign up</Text>
      <Text style={styles.subHeading}>Create an account to continue!</Text>

      <View style={styles.form}>
        <InputField label={"Full Name"} placeholder={"Enter FullName"} />
        <InputField label={"Email"} placeholder={"Enter Email"} />
        <InputField label={"Phone Number"} placeholder={"Phone Number"}/>

        <View style={styles.passwordContainer}>
          <InputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={secureText}
          />
          <Pressable style={styles.iconStyle} onPress={() => setSecureText(!secureText)}>
            <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="#6C7278" />
          </Pressable>
        </View>
        <View style={styles.passwordContainer}>
          <InputField
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setconfirmPassword}
            placeholder="Confirm password"
            secureTextEntry={secureText}
          />
          <Pressable style={styles.iconStyle} onPress={() => setSecureText(!secureText)}>
            <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="#6C7278" />
          </Pressable>
        </View>

        <ReusableButton title={"Register"} onPress={() => navigation.navigate("OtpVerification")} />
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
      <Pressable style={styles.socialButton}>
        <Image source={googleImg} height={4} width={4} />
        <Text style={styles.socialText}>Sign up with Google</Text>
      </Pressable>

      <Pressable style={styles.socialButton}>
        <Image source={faceBookImg} height={4} width={4} />
        <Text style={styles.socialText}>Sign up with Facebook</Text>
      </Pressable>

      <Text style={styles.signUpText}>
        Already have an account?
        <Text style={styles.signUpLink} onPress={() => navigation.navigate("Login")}> Login</Text>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "white",
  },
  heading: {
    color: PURPLECOLOR,
    fontWeight: "600",
    fontSize: 32,
    textAlign: "center",
    marginTop: 14,
  },
  subHeading: {
    fontWeight: "500",
    color: "#6C7278",
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },
  form: {
    marginTop: 34,
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
    padding: 4,
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
  passwordContainer: {
    position: "relative",
  },
  iconStyle: {
    position: "absolute",
    right: 10,
    top: 40,
  },
});
