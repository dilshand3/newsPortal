import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from '../constants/color';

const VideoPlayer = ({ thumbnail, title, view, time }) => {
    return (
        <View style={styles.container}>
            <View style={styles.liveBadgeContainer}>
                <Text style={styles.liveBadge}>LIVE</Text>
            </View>
            <Image source={thumbnail} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.stats}>
                    <Text style={styles.statText}>{view} Views</Text>
                    <Text style={styles.statText}>{time}</Text>
                </View>
                <View style={styles.actions}>
                    <Pressable style={styles.actionButton}>
                        <View style={styles.iconBackground}>
                            <AntDesign name="like2" size={18} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                        <View style={styles.iconBackground}>
                            <FontAwesome name="comment-o" size={18} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                        <View style={styles.iconBackground}>
                            <AntDesign name="download" size={18} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                        <View style={styles.iconBackground}>
                            <Entypo name="share" size={18} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                        <View style={styles.iconBackground}>
                            <Image source={require("assets/unsaved.png")} style={styles.saveIcon} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10,
    },
    liveBadgeContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        zIndex: 1,
    },
    liveBadge: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        gap : 8
    },
    statText: {
        fontSize: 12,
        color: '#666',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        borderTopWidth: 1,
        borderTopColor: '#eee',
        gap : 5
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    iconBackground: {
        backgroundColor: PURPLECOLOR,
        borderRadius: 9,
        padding: 6,
    },
    saveIcon: {
        width: 18,
        height: 18,
        tintColor: '#fff',
    },
});