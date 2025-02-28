import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react';
import { PURPLECOLOR } from '../constants/color';
import InputField from '../components/Input';
import ReusableButton from '../components/SubmitBtn';

const ForgotPassword = ({ navigation }) => {
    const [email, setemail] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.subHeading}>Enter your registered email or Phone number
                to receive password reset link</Text>
            <InputField
                label="Email/Number"
                value={email}
                onChangeText={setemail}
                placeholder="Enter your Email"
                style={{ marginTop: 20 }}
            />
            <View style={styles.txtNavigation}>
                <Text style={styles.navigateTxt}>Go back to</Text>
                <Text style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>LOGIN</Text>
            </View>
            <ReusableButton title={"Reset Password"} onPress={() => navigation.navigate("verificationcode")} />
            <Text style={styles.signUpText}>
                Don't have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate("signup")}>Sign Up</Text>
            </Text>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "white",
        flex: 1,
    },
    heading: {
        color: PURPLECOLOR,
        textAlign: 'center',
        fontSize: 32,
        marginTop: 25,
        fontWeight: '600',
    },
    InputField: {
        marginTop: 20,
    },
    subHeading: {
        color: '#4F4F4F',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: "400",
        marginBottom: 20
    },
    txtNavigation: {
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    },
    loginBtn: {
        color: PURPLECOLOR,
        fontWeight: 600,
        fontSize: 14
    },
    navigateTxt: {
        fontWeight: 400,
        color: "#646982",
        fontSize: 16
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
})