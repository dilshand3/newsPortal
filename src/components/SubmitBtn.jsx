import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { PURPLECOLOR } from '../constants/color';

const ReusableButton = ({ title, onPress, style }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: PURPLECOLOR,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReusableButton;
