import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { PURPLECOLOR } from '../constants/color';

const CategoryItem = ({ category, isActive, onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    isActive && styles.activeButton,
                    pressed && styles.pressedButton
                ]}
                onPress={() => onPress(category)}
            >
                <Text style={[styles.buttonText, isActive && styles.activeText]}>
                    {category}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
       marginLeft : 5
    },
    button: {
        alignSelf: "center",
        height: "38",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderWidth: 0.9,
        borderColor: PURPLECOLOR,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: 'transparent',
        marginTop: 13,
        marginBottom: 25,
    },
    activeButton: {
        backgroundColor: PURPLECOLOR,
    },
    pressedButton: {
        opacity: 0.7,
    },
    buttonText: {
        color: PURPLECOLOR,
        fontSize: 14,
        fontWeight: '500',
    },
    activeText: {
        color: '#FCBA37',
    },
});

export default CategoryItem;
