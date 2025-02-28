import { StyleSheet, Text, View, Pressable } from 'react-native';
import InputField from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import ReusableButton from '../components/SubmitBtn';
import { PURPLECOLOR } from '../constants/color';

const ResetPasswd = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.subHeading}>Set a new password to your account</Text>
            <View style={styles.passwordContainer}>
                <InputField
                    label="New Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry={secureText}
                />
                <Pressable style={styles.iconStyle} onPress={() => setSecureText(prev => !prev)}>
                    <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="#6C7278" />
                </Pressable>
            </View>
            <View style={styles.passwordContainer}>
                <InputField
                    label="Confirm Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry={secureText}
                />
                <Pressable style={styles.iconStyle} onPress={() => setSecureText(prev => !prev)}>
                    <Feather name={secureText ? 'eye-off' : 'eye'} size={20} color="#6C7278" />
                </Pressable>
            </View>
            <View style={styles.txtNavigation}>
                <Text style={styles.navigateTxt}>Go back to</Text>
                <Text style={styles.loginBtn} onPress={() => navigation.navigate("Login")}>LOGIN</Text>
            </View>
            <ReusableButton title={"Reset Password"} onPress={() => navigation.navigate("passwordSucces")} />
            <Text style={styles.signUpText}>
                Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
        </View>
    );
};

export default ResetPasswd;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
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
    passwordContainer: {
        position: 'relative',
        marginTop: 10,
    },
    iconStyle: {
        position: 'absolute',
        right: 15,
        top: 38,
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
