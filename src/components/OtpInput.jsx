import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { PURPLECOLOR } from '../constants/color';

const OTPInput = ({ value, onChangeText, placeholder, style, onResend }) => {
  const [timer, setTimer] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const handleResend = () => {
    if (!isDisabled) {
      setTimer(30);
      setIsDisabled(true);
      onResend?.(); 
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#A0A0A0"
          keyboardType="numeric"
          maxLength={6}
        />
        <Pressable
          onPress={handleResend}
          disabled={isDisabled}
          style={styles.resendButton}>
          <Text style={[styles.timerText, isDisabled && styles.disabledText]}>
            {isDisabled ? `Resend in (${timer}s)` : 'Resend'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    paddingRight: 80,
    fontSize: 16,
    backgroundColor: 'white',
    color: PURPLECOLOR,
  },
  resendButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 14,
    color: PURPLECOLOR,
    fontWeight: "600",
  },
  disabledText: {
    color: PURPLECOLOR,
  },
});

export default OTPInput;